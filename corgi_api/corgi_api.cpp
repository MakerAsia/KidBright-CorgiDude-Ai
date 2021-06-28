#include <stdio.h>
#include <string.h>
#include "esp_system.h"
#include "kidbright32.h"
#include "corgi_api.h"

CORGI_API::CORGI_API(int bus_ch, int dev_addr) {
	polling_ms = CORGI_API_POLLING_MS;
	channel = bus_ch;
	address = 0x3E;
}

void CORGI_API::init(void) {

	while (i2c_driver_delete(I2C_NUM_1) != ESP_OK) {
		asm("nop");
	}

	esp_err_t ret;
	i2c_config_t conf;

	conf.mode = I2C_MODE_MASTER;
	conf.sda_io_num = CHAIN_SDA_GPIO;
	conf.sda_pullup_en = GPIO_PULLUP_ENABLE;
	conf.scl_io_num = CHAIN_SCL_GPIO;
	conf.scl_pullup_en = GPIO_PULLUP_ENABLE;
	conf.master.clk_speed = 100000;

	while (i2c_param_config(I2C_NUM_1, &conf) != ESP_OK) {
		asm("nop");
	}

	while (i2c_driver_install(I2C_NUM_1, conf.mode, 0, 0, 0) != ESP_OK) {
		asm("nop");
	}

	state = s_idle;
	initialized = true;
	error = false;

}

int CORGI_API::prop_count(void) {
	return 0;
}

bool CORGI_API::prop_name(int index, char* name) {
	// not supported
	return false;
}

bool CORGI_API::prop_unit(int index, char* unit) {
	// not supported
	return false;
}

bool CORGI_API::prop_attr(int index, char* attr) {
	// not supported
	return false;
}

bool CORGI_API::prop_read(int index, char* value) {
	// not supported
	return false;
}

bool CORGI_API::prop_write(int index, char* value) {
	// not supported
	return false;
}


void CORGI_API::process(Driver* drv) {
	i2c_p = (I2CDev*)drv;

	switch (state) {

	case s_idle:

		break;

	case s_init:
		if (threshold(_threshold) == _threshold) {
			if (setmode(mode_setting) == mode_setting) {
				state = s_wait;
				tickcnt = get_tickcnt();
			}
		}
		break;

	case s_wait:

		if (is_tickcnt_elapsed(tickcnt, 10000)) {
			__rw = W();
			__rh = H();
			state = s_idle;
		}
		break;



	case s_pulling_detection:
		if (new_data_available() == 1) {
			state = s_newdata;
		}
		else {
			counts = 0;
			state = s_idle;
		}
		break;

	case s_pulling_classification:
		if (new_data_available() == 1) {
			state = s_newdata;
		}
		else {
			counts = 0;
			state = s_idle;
		}
		break;

	case s_pulling_regression:
		if (new_data_available() == 1) {
			state = s_newdata;
		}
		else {
			counts = 0;
			state = s_idle;
		}

		break;


	case s_newdata:

		switch (ai_mode)
		{
		case classifly:
			counts = read_classification(classifly_tmp);
			state = s_idle;
			break;
		case detection:
			counts = read_detection(detection_tmp);
			state = s_idle;
			break;
		case regression:
			counts = read_regression(classifly_tmp);
			state = s_idle;
			break;
		}

		break;



	default:
	{
		// i2c_p = (I2CDev*)drv;

		// uint8_t tmp[2];
		// tmp[0] = 1;
		// tmp[1] = 0;

		// i2c_p->write(0, corgi_addr, tmp, 2);
		break;
	}


	}

}

void CORGI_API::delay1ms(void) {
	uint32_t cd = 25000 * 3;
	while (cd--) {
		asm("nop");
	}
	// vTaskDelay(10 / portTICK_PERIOD_MS);

}

void CORGI_API::write_register(uint8_t reg, uint8_t value) {
	if (i2c_p == NULL)
		return;
	uint8_t tmp[2];
	tmp[0] = reg;
	tmp[1] = value;
	i2c_p->write(0, corgi_addr, tmp, 2);
	delay1ms();
}

uint8_t CORGI_API::read_register(uint8_t reg) {
	if (i2c_p == NULL)
		return 0;
	uint8_t tmp = 0;
	if (i2c_p->write(0, corgi_addr, &reg, 1) == ESP_OK) {
		delay1ms();
		i2c_p->read(0, corgi_addr, NULL, 0, &tmp, 1);
		delay1ms();
	}
	return tmp;
}

uint16_t CORGI_API::read_2bytes_register(uint8_t reg) {
	if (i2c_p == NULL)
		return 0;
	uint8_t tmp[2] = { 0 };
	if (i2c_p->write(0, corgi_addr, &reg, 1) == ESP_OK) {
		delay1ms();
		i2c_p->read(0, corgi_addr, NULL, 0, tmp, 2);
		delay1ms();
	}
	return (uint16_t)tmp[0] << 8 | (uint16_t)tmp[1] << 0;
}

uint8_t CORGI_API::write_read_register(uint8_t reg, uint8_t value) {
	if (i2c_p == NULL)
		return 0;
	uint8_t val;
	uint8_t tmp[2];
	tmp[0] = reg;
	tmp[1] = value;

	i2c_p->write(0, corgi_addr, tmp, 2);

	delay1ms();
	i2c_p->read(0, corgi_addr, NULL, 0, &val, 1);
	delay1ms();
	return val;
}

uint8_t CORGI_API::read_detection(uint8_t* rawdata) {
	if (i2c_p == NULL)
		return 0;
	uint8_t tmp = 0;
	uint8_t reg = 100;
	if (i2c_p->write(0, corgi_addr, &reg, 1) == ESP_OK) {
		delay1ms();
		if (i2c_p->read(0, corgi_addr, NULL, 0, rawdata, 60) == ESP_OK) {
			delay1ms();
			for (int i = 0; i < 10; i++) {
				if (rawdata[i * 6] != 255)
					tmp++;
			}
			uint8_t tmp1[2];
			tmp1[0] = 13;
			tmp1[1] = 0;
			i2c_p->write(0, corgi_addr, tmp1, 2);
			delay1ms();
		}
	}
	return tmp;
}

uint8_t CORGI_API::read_classification(uint8_t* rawdata) {
	if (i2c_p == NULL)
		return 0;
	uint8_t tmp = 0;
	uint8_t reg = 100;
	if (i2c_p->write(0, corgi_addr, &reg, 1) == ESP_OK) {
		delay1ms();
		if (i2c_p->read(0, corgi_addr, NULL, 0, rawdata, 30) == ESP_OK) {
			delay1ms();
			for (int i = 0; i < 10; i++) {
				if (rawdata[i * 3] != 255)
					tmp++;
			}

			uint8_t tmp1[2];
			tmp1[0] = 13;
			tmp1[1] = 0;
			i2c_p->write(0, corgi_addr, tmp1, 2);
			delay1ms();
		}
	}
	return tmp;
}

uint8_t CORGI_API::read_regression(uint8_t* rawdata) {
	if (i2c_p == NULL)
		return 0;
	uint8_t tmp = 0;
	uint8_t reg = 100;
	if (i2c_p->write(0, corgi_addr, &reg, 1) == ESP_OK) {
		delay1ms();
		if (i2c_p->read(0, corgi_addr, NULL, 0, rawdata, 10) == ESP_OK) {
			delay1ms();
			for (int i = 0; i < 10; i++) {
				if (rawdata[i] != 255)
					tmp++;
			}
			uint8_t tmp1[2];
			tmp1[0] = 13;
			tmp1[1] = 0;
			i2c_p->write(0, corgi_addr, tmp1, 2);
			delay1ms();
		}
	}
	return tmp;
}

void CORGI_API::save_value_1(uint8_t value) {
	write_register(26, value);
}

void CORGI_API::save_value_2(uint8_t value) {
	write_register(27, value);
}

uint8_t CORGI_API::setmode(int8_t modes) {
	return write_read_register(1, modes);
}

uint8_t CORGI_API::status(void) {
	return read_register(0);
}

uint16_t CORGI_API::W(void) {
	return read_2bytes_register(2);
}

uint16_t CORGI_API::H(void) {
	return read_2bytes_register(4);
}

uint16_t CORGI_API::Class(void) {
	return read_2bytes_register(6);;
}

uint8_t CORGI_API::threshold(uint8_t threshold) {
	if (threshold > 99)
		threshold = 99;
	return write_read_register(10, threshold);
}

uint8_t CORGI_API::fps() {
	return read_register(11);
}

void CORGI_API::save_img() {
	write_register(12, 1);
}

uint8_t CORGI_API::new_data_available() {
	return read_register(13);
}

uint16_t CORGI_API::num_img() {
	return read_2bytes_register(15);
}

uint16_t CORGI_API::num_mic() {
	return read_2bytes_register(17);
}

void CORGI_API::save_mic() {
	write_register(19, 1);
}

void CORGI_API::face_recognition_save(uint8_t id) {
	write_register(20, id);
}

void CORGI_API::face_recognition_del(uint8_t id) {
	write_register(21, id);
}

uint8_t CORGI_API::face_recognition_threshold(uint8_t threshold) {
	if (threshold > 99)
		threshold = 99;
	return write_read_register(22, threshold);
}

uint8_t CORGI_API::vflip(uint8_t val) {
	return write_read_register(23, val);
}

uint8_t CORGI_API::hmirror(uint8_t val) {
	return write_read_register(24, val);
}

