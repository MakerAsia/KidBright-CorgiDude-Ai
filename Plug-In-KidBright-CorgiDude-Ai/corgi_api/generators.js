
Blockly.JavaScript['aidude_yolo_20_class'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 4;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::detection;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }
      
      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_detection;

      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for (int i = 0; i < DEV_I2C1.CORGI_API(0, 0x3E).counts; i++) 
      {
        int  __x = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 1] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __y = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 2] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __w = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 3] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __h = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 4] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __class = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 0];
        int  __confidence = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 5];

        ${statements_code}
      }
      \n
      `;
  return code;
};

Blockly.JavaScript['aidude_yolo_custom'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 3;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::detection;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }
      
      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_detection;

      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for (int i = 0; i < DEV_I2C1.CORGI_API(0, 0x3E).counts; i++) {
        int  __x = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 1] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __y = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 2] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __w = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 3] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __h = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 4] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __class = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 0];
        int  __confidence = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 5];

        ${statements_code}
      }
      \n
      `;
  return code;
};

Blockly.JavaScript['aidude_mobilenet_custom'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 3;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::classifly;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }

      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_classification;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for(int i=0;i<DEV_I2C1.CORGI_API(0, 0x3E).counts;i++){
        uint16_t  __class = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+0]<<8) | DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+1];
        int  __confidence = DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+2];

        ${statements_code}
      }
    \n
    `;
  return code;
};

Blockly.JavaScript['aidude_mobilenet'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 8;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::classifly;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }

      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_classification;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for(int i=0;i<DEV_I2C1.CORGI_API(0, 0x3E).counts;i++){
        uint16_t  __class = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+0]<<8) | DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+1];
        int  __confidence = DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+2];

        ${statements_code}
      }
    \n
    `;
  return code;
};

Blockly.JavaScript['aidude_face_detection'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 6;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::detection;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }
      
      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_detection;

      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for (int i = 0; i < DEV_I2C1.CORGI_API(0, 0x3E).counts; i++) {
        int  __x = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 1] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __y = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 2] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __w = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 3] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __h = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 4] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __class = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 0];
        int  __confidence = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 5];

        ${statements_code}
      }
      \n
      `;
  return code;
};

Blockly.JavaScript['aidude_face_recognition'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 13;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::classifly;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }

      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_classification;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for(int i=0;i<DEV_I2C1.CORGI_API(0, 0x3E).counts;i++){
        uint16_t  __class = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+0]<<8) | DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+1];
        int  __confidence = DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+2];

        ${statements_code}
      }
    \n
    `;
  return code;
};

Blockly.JavaScript['aidude_facemask_detection'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 11;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::detection;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }
      
      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_detection;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for (int i = 0; i < DEV_I2C1.CORGI_API(0, 0x3E).counts; i++) {
        int  __x = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 1] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __y = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 2] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __w = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 3] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __h = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 4] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __class = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 0];
        int  __confidence = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 5];

        ${statements_code}
      }
      \n
      `;
  return code;
};

Blockly.JavaScript['aidude_hand_detection'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 12;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::detection;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }
      
      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_detection;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for (int i = 0; i < DEV_I2C1.CORGI_API(0, 0x3E).counts; i++) {
        int  __x = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 1] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __y = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 2] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __w = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 3] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __h = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 4] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __class = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 0];
        int  __confidence = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 5];

        ${statements_code}
      }
      \n
      `;
  return code;
};

Blockly.JavaScript['aidude_garbage_classification'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 7;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::classifly;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }

      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_classification;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for(int i=0;i<DEV_I2C1.CORGI_API(0, 0x3E).counts;i++){
        uint16_t  __class = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+0]<<8) | DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+1];
        int  __confidence = DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+2];

        ${statements_code}
      }
    \n
    `;
  return code;
};

Blockly.JavaScript['aidude_cat_face_detection'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 5;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::detection;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }
      
      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_detection;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for (int i = 0; i < DEV_I2C1.CORGI_API(0, 0x3E).counts; i++) {
        int  __x = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 1] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __y = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 2] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __w = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 3] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __h = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 4] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __class = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 0];
        int  __confidence = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 5];

        ${statements_code}
      }
      \n
      `;
  return code;
};

// Blockly.JavaScript['aidude_wake_word_detection'] = function (block) {
//   var number_threshold = block.getFieldValue('Threshold');
//   var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
//   // TODO: Assemble JavaScript into code variable.
//   var code = `
//       uint8_t mode = 14;
//       if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
//         DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
//         DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
//         DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::classifly;
//         DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
//         while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
//           vTaskDelay(50 / portTICK_PERIOD_MS);
//         }
//       }

//       DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_classification;
//       while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
//         vTaskDelay(50 / portTICK_PERIOD_MS);
//       }

//       for(int i=0;i<DEV_I2C1.CORGI_API(0, 0x3E).counts;i++){
//         uint16_t  __class = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+0]<<8) | DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+1];
//         int  __confidence = DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+2];

//         ${statements_code}
//       }
//     \n
//     `;
//   return code;
// };

Blockly.JavaScript['aidude_head_detection'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 10;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::detection;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }
      
      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_detection;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for (int i = 0; i < DEV_I2C1.CORGI_API(0, 0x3E).counts; i++) {
        int  __x = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 1] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __y = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 2] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __w = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 3] * DEV_I2C1.CORGI_API(0, 0x3E).__rw) * 0.01f;
        int  __h = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 4] * DEV_I2C1.CORGI_API(0, 0x3E).__rh) * 0.01f;
        int  __class = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 0];
        int  __confidence = (uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).detection_tmp[(i * 6) + 5];

        ${statements_code}
      }
      \n
      `;
  return code;
};

Blockly.JavaScript['aidude_car_classification'] = function (block) {
  var number_threshold = block.getFieldValue('Threshold');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = `
      uint8_t mode = 9;
      if(DEV_I2C1.CORGI_API(0, 0x3E).mode_setting != mode){
        DEV_I2C1.CORGI_API(0, 0x3E).mode_setting = mode;
        DEV_I2C1.CORGI_API(0, 0x3E)._threshold = ${number_threshold};
        DEV_I2C1.CORGI_API(0, 0x3E).ai_mode = CORGI_API::classifly;
        DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_init;
        while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
          vTaskDelay(50 / portTICK_PERIOD_MS);
        }
      }

      DEV_I2C1.CORGI_API(0, 0x3E).state = CORGI_API::s_pulling_classification;
      while(DEV_I2C1.CORGI_API(0, 0x3E).state != CORGI_API::s_idle){
        vTaskDelay(50 / portTICK_PERIOD_MS);
      }

      for(int i=0;i<DEV_I2C1.CORGI_API(0, 0x3E).counts;i++){
        uint16_t  __class = ((uint16_t)DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+0]<<8) | DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+1];
        int  __confidence = DEV_I2C1.CORGI_API(0, 0x3E).classifly_tmp[(i*3)+2];

        ${statements_code}
      }
    \n
    `;
  return code;
};

// Blockly.JavaScript['aidude_qr_detection'] = function (block) {
//   var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };

// Blockly.JavaScript['aidude_line_detection'] = function (block) {
//   var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };

// Blockly.JavaScript['aidude_circle_detection'] = function (block) {
//   var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };

// Blockly.JavaScript['aidude_ract_detection'] = function (block) {
//   var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };

// Blockly.JavaScript['aidude_color_tracking'] = function (block) {
//   var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };
Blockly.JavaScript['getdata_classify'] = function (block) {
  var dropdown_varname = block.getFieldValue('varname');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_varname;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['getdata_detection'] = function (block) {
  var dropdown_varname = block.getFieldValue('varname');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_varname;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['frame_rate'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `DEV_I2C1.CORGI_API(0, 0x3E).fps()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
// Blockly.JavaScript['num_img'] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = `DEV_I2C1.CORGI_API(0, 0x3E).num_img()`;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
// Blockly.JavaScript['num_mic'] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = `DEV_I2C1.CORGI_API(0, 0x3E).num_mic()`;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
Blockly.JavaScript['__status'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `DEV_I2C1.CORGI_API(0, 0x3E).status()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['__vflip'] = function (block) {
  var dropdown__vflip = block.getFieldValue('_vflip');
  // TODO: Assemble JavaScript into code variable.
  var code = `DEV_I2C1.CORGI_API(0, 0x3E).vflip(${dropdown__vflip})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['__hmirror'] = function (block) {
  var dropdown__hmirror = block.getFieldValue('_hmirror');
  // TODO: Assemble JavaScript into code variable.
  var code = `DEV_I2C1.CORGI_API(0, 0x3E).hmirror(${dropdown__hmirror})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['face_recognition_save'] = function (block) {
  var value__id = Blockly.JavaScript.valueToCode(block, '_id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `DEV_I2C1.CORGI_API(0, 0x3E).face_recognition_save(${value__id});\n`;
  return code;
};
Blockly.JavaScript['face_recognition_del'] = function (block) {
  var value__id = Blockly.JavaScript.valueToCode(block, '_id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `DEV_I2C1.CORGI_API(0, 0x3E).face_recognition_del(${value__id});\n`;
  return code;
};
// Blockly.JavaScript['save_mic'] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'DEV_I2C1.CORGI_API(0, 0x3E).save_mic();\n';
//   return code;
// };
// Blockly.JavaScript['save_img'] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'DEV_I2C1.CORGI_API(0, 0x3E).save_img();\n';
//   return code;
// };
// Blockly.JavaScript['save_value_1'] = function (block) {
//   var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = `DEV_I2C1.CORGI_API(0, 0x3E).save_value_1(${value_name});\n`;
//   return code;
// };
// Blockly.JavaScript['save_value_2'] = function (block) {
//   var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = `DEV_I2C1.CORGI_API(0, 0x3E).save_value_2(${value_name});\n`;
//   return code;
// };
// Blockly.JavaScript['init_save_mic_img'] = function (block) {
//   var dropdown___moders = block.getFieldValue('__moders');
//   // TODO: Assemble JavaScript into code variable.
//   var code = `
//       while(DEV_I2C1.CORGI_API(0, 0x3E).setmode(${dropdown___moders}) != ${dropdown___moders} ){
//        vTaskDelay(1000 / portTICK_PERIOD_MS);
//       }

//       \n
//       `;
//   return code;
// };