#ifndef __CORGIDUDE_API_H__
#define __CORGIDUDE_API_H__

#include "driver.h"
#include "device.h"
#include "i2c-dev.h"

#define CORGI_API_POLLING_MS	100

class CORGI_API : public Device {
private:
	uint8_t corgi_addr = 0x3E;

	// properties
	I2CDev* i2c_p;


public:
	// constructor
	CORGI_API(int bus_ch, int dev_addr);
	// override
	void init(void);
	void process(Driver* drv);
	int prop_count(void);
	bool prop_name(int index, char* name);
	bool prop_unit(int index, char* unit);
	bool prop_attr(int index, char* attr);
	bool prop_read(int index, char* value);
	bool prop_write(int index, char* value);

	enum {
		s_idle, s_init, s_wait, s_newdata, s_pulling_detection, s_pulling_classification, s_pulling_regression
	} state;

	enum {
		classifly, detection, regression
	} ai_mode;

	TickType_t tickcnt;

	uint8_t mode_setting = 0;
	uint8_t mode_running = 0;
	uint8_t _threshold = 0;
	uint8_t counts = 0;
	uint16_t __rw;
	uint16_t __rh;
	uint8_t detection_tmp[60] = { 0 };
	uint8_t classifly_tmp[30] = { 0 };
	uint8_t regression_tmp[10] = { 0 };


	// method

	void write_register(uint8_t reg, uint8_t value);
	uint8_t read_register(uint8_t reg);
	uint16_t read_2bytes_register(uint8_t reg);
	uint8_t write_read_register(uint8_t reg, uint8_t value);

	uint8_t read_detection(uint8_t* rawdata);
	uint8_t read_classification(uint8_t* rawdata);
	uint8_t read_regression(uint8_t* rawdata);

	void save_value_1(uint8_t value);
	void save_value_2(uint8_t value);
	uint8_t setmode(int8_t modes);
	uint8_t status(void);
	uint16_t W(void);
	uint16_t H(void);
	uint16_t Class(void);
	uint8_t threshold(uint8_t threshold);
	uint8_t fps();
	void save_img();
	uint8_t new_data_available();
	uint16_t num_img();
	uint16_t num_mic();
	void save_mic();
	void face_recognition_save(uint8_t id);
	void face_recognition_del(uint8_t id);
	uint8_t face_recognition_threshold(uint8_t threshold);
	uint8_t vflip(uint8_t val);
	uint8_t hmirror(uint8_t val);
	void delay1ms(void);
};

#endif



