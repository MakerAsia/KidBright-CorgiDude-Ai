Blockly.Blocks['aidude_yolo_20_class'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,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", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Object detection");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("YoLo Object Detection 20 classes (aeroplane, bicycle, bird, boat, bottle, bus, car, cat, chair, cow, diningtable, dog, horse, motorbike, person, pottedplant, sheep, sofa, train, tvmonitor)");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_yolo_custom'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,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", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Detect Custom Model");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("YoLo Object Detection from flash model");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_mobilenet_custom'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAAEAAAABACAYAAACqaX HeAAAABHNCSVQICAgIfAhkiAAAAAlwSF lzAAABuwAAAbsBOuzj4gAAABl0RVh0U2 9mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5 vuPBoAAAm+SURBVHic7Zp7cFTVHcc/59 7dZLN5LkEDJWLklRJxkBSKFa0PRGfQsW g12mKttI5O0VGrZTo6KjKdsTPK21pROy o42jHFRAEZAxYf6BQ0GHwEkEgSIoYQsm ye+95z+kde+8ju3mQ3iSN8/zvnnt/v/u 7n3Hvu7/zuFUopRkuLFj10jjD5rgNxCa ifgBgPYhyoFKAJpZoQ2nGB/EIofVtZ2d oqleSAxUgDuG7xUpvZbb4PwQ3AzEEZCx pRbFOaWvdW6foDyYhnxABcc/uy9DSX73 6h1DIgJ0F3EniVgPZEefma+kQcjQiAG2 ++70aF+CeKvJjB6DopmVZ0kwl3WyfS54 vn2otglVkcf6y0tDQwlNiGFYAQQiy66b 7lKB4HRPhxa04W+RdOZ2Lx+YwtyMdsy6 LNZMIuFS1SgVJYupx4axs4ubuSlj1VUc 6kKgjot5aXr2kddIzDBaCk5J4MvzJtUo obwo/lFuQz59ZrOefC6SAiuPSpXSmapO K7gEIBGT4fXTt2U1u6HaQMH16jI6/fvP mZQ4OJc1gAlJSU6D45vgKYH9xvtWXxiz t+zaS5M2NeeLhalaLaL3H1hGrx+2nb+C aNH+wNGymaAxpztpSubTDqWxystu/RoM BwNAZUtvWdzL2fVVqD+86aPJGrl92J1Z Y9JJ9+4Bu/5LjspqAB+ieVHN7wevjQqo DXfcmWLc87jfg1CZibzHug8vMq9n5WGd I36eJZXL50MbrZPGS/JuB8k8ZYqTjglw QAOW82Mwry+fqRlcGPxCw9xfIycIsRv9 qQIxpA9lMOyre+E9I3fvpkrrj3dwldfL DyNEGRqT/srgnjKHpkafiwkkU333+nEX 9JBfDervcJBPrfRhljbVz14B/QdD2Zpy FPExTo/WuIq3ASBb+5PmSMpnhiyZIlln i+TOEdUiq2vfsura1tgwrK4/FwpK6+v0 MI5j9wB5asjEH5MarJuoZDStp6FnHTws vJ+nQ/7Ue61z8FE1rbs+8BVsXyIw5V20 OWgI6OTv6+ajVSJrYyTLroQub/eUlCPu KpVSkqff2vw/QTLXz9lyeDh9jNmr+gtP TZzmg+Iu6AzMwMHn7oQTq6otpEyO3x8O JLG+l9pWq6xuxbrzVsP1TlCEGuJrD3TJ Yzbyy5s4qwV/VtE3J90rQQKI3mIwIAdE PIzDR+6+7/8iuC84lzZ19A9vizDdsnon ODAChg/G9/FQwA4DoGC+BIbR2tbcbXgD 1hr72JP5th2DZR2TSBDvQuvb68saBpwa /FhStWrNCWL18ekTrCAADa2tt58ZVNQ4 9IiO4Ud4QkgFxN0NxzF3iFIO/iYk583D cpufur7bOBTweyjwCQnZXFTYuuN3wH+P 1+Ptj9SV/bNiGPtOzMQV1EorIJQTP9j6 Bt7sxgAKiAdh5GAQDMLp5l+OQnW+whAN LHJLrVH7xSw7YVui00BiHUuGi2AwLw+f y4PW5DJz/R3BzSttqyDNklU+EARGZ6aB sxPpptBICuLidPrV2Px+MZWjAZ1viDki xzeKkhNSWkqVC2aLYRACyWVKZNmWx4Df B4PDSfbOlruzu6DNklUz5CkzYRPnkCez TbCAC6rrP4lpsNn7zFbmflun/0tZ2t7Y ZtkyVPWNIqwyZBKNUUzTbhzVBmRuiK32 UfdFUqYbnDAPjDYxDa8Wi2EXeA3+/ntT f+E/UREAhmXjCDyy6dB0Bqagrp6Va6ur rrD62NzTgd7SO6GDrCqlqOsNqhkOJINN sIAB6Pl/qjDbjc0d8COTmhVZ1pU6ZQ9c WX3Q2l+K7qAIVXXhQ/8iRIAqeCNm4pSl H3v2AAormsbG0VrBnQPgJAerqVR/+6DK /PO6CBQGCxpIb0TS+c1g8AOLrvqxED4J CK4Hq4+Xhz+JDtsb4mDZgH6LpGmh63lt CnqVMmo2kasif/bthXjeNYE7b8qPlH0l QfNPsC+H5jWfiQbbHsk1IRSrNYKPppYV 9bKcVn/4553qTolFQ4ggBYG0/gOFATNE I0O63md2P5SFpJ7Or5VyCCSt1HK7+i6V BtstxHSAHfBvovXgfqn3stfNSTFZuejp mYJAxAINFwMe6sDIpnnh9y7L9rX8HpGJ 68oCYgae95tAXgLa+gs/5Y8JAGj1NtiO cnYQB54nWmimVMFcu4a/5HmPX+WXE62t ix8l8E4n/jG5QapaIhaPZTvzxEQ1lFyB gBj2/fvj5uPp8wABP9+cLZOQHuvSo0fz j57VHeW/0yPtfQ9hbh+l4qDvn7axvWb+ s5+PQLIWOEUpvKNq/baMRfUsviAL8sdH FjcWg9seHzat5+dDXtJ1qiWMWXF/jCLz nol0i6n3mxYzfVK9aHjFNStfh9nj8Z9Z t0AAC3zW3n5wWhiZTjWBNvPbKKb3btQU V+2Iwpu1Ts8QU42bPip3k8tD3zCrWvlo eMU0rh9bnG+qR8oaSkxNDHiIiy+GCVL5 4lnYP9HSf94Ff4AoINH2az61Dk9jhnQh 6zb7mWgjkXILSB50ACrbL763Bjz4Vnej y0bt1Fw9s7I8YrJfF63UHFWfFaprXt9/ H+Gxg2AL16qfY23tnx/oDfGVIzrOTPnM 7E4iJyC/Ix2bLpSLPQIhWnpEKXktSOLt w19TR/uBfH/mh/xai33B7XBJSaE3Z5cS EMO4CavDUcrm2ibMtWTjni7xR1sxndpO N1GapIdaL4W/mb655asODubD01UCFgbu iQ2BAiAKQcayK1obG/o6YOer73+aeeh+ vSUMhGAEhhJRCQfLpvHxUffIS70/hHly jyABuE9D5ZVvZcX/I/FAgRAM59eCWW2u /62k0+N6qn4qJpOq2bnwtxYBRArz53St 7YW4WoqYbGowP96RFLBxFsDQjxbLSfIA YLIWIzJAKxAkr8TwLdbIbieajieeB24f 3ma+SxOjRnJ5qrE6vHiUUFyMzIIDMjA3 8gUF1bW/uChmnb5s2r4+bWO3c+37Zgwd 3XREJQizuc2ZSUlIRAGHA3OGKypOGfOg Nn/uS+rlk2C7fZQt4M7xUWjVkfYRtDg4 EwLHnAD0E7dz7fFvDo1ygI+5FILe5wZm /szRN+tADAGIQfNQCIA8GV/diPHgDEgK DUH08LABAVwsenDQDohqBJ62VKcbtALE 3R1V2j+xocBfUUSV7tbZ9Wd8BAOgNgtA MYbZ0BMNoBjLbOABjtAEZbZwCMdgCjrd MeQEQq3FKykLTDdX1t/cBhVE9RNDBpYo SDU2oBHpHf17ZY69Bk988VPm1MSD0QYJ pJcmWqn97CWzOCE3r3DxcCWJA5snOScF l8BLSusGjMA8Pl/LR/BM4AAI6OdhAxJa gfTvf/B8hHQyb0q61EAAAAAElFTkSuQm CC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Classify Custom Model");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("Mobilenet Image Classification");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_mobilenet'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAAEAAAABACAYAAACqaX HeAAAABHNCSVQICAgIfAhkiAAAAAlwSF lzAAABuwAAAbsBOuzj4gAAABl0RVh0U2 9mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5 vuPBoAAAm+SURBVHic7Zp7cFTVHcc/59 7dZLN5LkEDJWLklRJxkBSKFa0PRGfQsW g12mKttI5O0VGrZTo6KjKdsTPK21pROy o42jHFRAEZAxYf6BQ0GHwEkEgSIoYQsm ye+95z+kde+8ju3mQ3iSN8/zvnnt/v/u 7n3Hvu7/zuFUopRkuLFj10jjD5rgNxCa ifgBgPYhyoFKAJpZoQ2nGB/EIofVtZ2d oqleSAxUgDuG7xUpvZbb4PwQ3AzEEZCx pRbFOaWvdW6foDyYhnxABcc/uy9DSX73 6h1DIgJ0F3EniVgPZEefma+kQcjQiAG2 ++70aF+CeKvJjB6DopmVZ0kwl3WyfS54 vn2otglVkcf6y0tDQwlNiGFYAQQiy66b 7lKB4HRPhxa04W+RdOZ2Lx+YwtyMdsy6 LNZMIuFS1SgVJYupx4axs4ubuSlj1VUc 6kKgjot5aXr2kddIzDBaCk5J4MvzJtUo obwo/lFuQz59ZrOefC6SAiuPSpXSmapO K7gEIBGT4fXTt2U1u6HaQMH16jI6/fvP mZQ4OJc1gAlJSU6D45vgKYH9xvtWXxiz t+zaS5M2NeeLhalaLaL3H1hGrx+2nb+C aNH+wNGymaAxpztpSubTDqWxystu/RoM BwNAZUtvWdzL2fVVqD+86aPJGrl92J1Z Y9JJ9+4Bu/5LjspqAB+ieVHN7wevjQqo DXfcmWLc87jfg1CZibzHug8vMq9n5WGd I36eJZXL50MbrZPGS/JuB8k8ZYqTjglw QAOW82Mwry+fqRlcGPxCw9xfIycIsRv9 qQIxpA9lMOyre+E9I3fvpkrrj3dwldfL DyNEGRqT/srgnjKHpkafiwkkU333+nEX 9JBfDervcJBPrfRhljbVz14B/QdD2Zpy FPExTo/WuIq3ASBb+5PmSMpnhiyZIlln i+TOEdUiq2vfsura1tgwrK4/FwpK6+v0 MI5j9wB5asjEH5MarJuoZDStp6FnHTws vJ+nQ/7Ue61z8FE1rbs+8BVsXyIw5V20 OWgI6OTv6+ajVSJrYyTLroQub/eUlCPu KpVSkqff2vw/QTLXz9lyeDh9jNmr+gtP TZzmg+Iu6AzMwMHn7oQTq6otpEyO3x8O JLG+l9pWq6xuxbrzVsP1TlCEGuJrD3TJ Yzbyy5s4qwV/VtE3J90rQQKI3mIwIAdE PIzDR+6+7/8iuC84lzZ19A9vizDdsnon ODAChg/G9/FQwA4DoGC+BIbR2tbcbXgD 1hr72JP5th2DZR2TSBDvQuvb68saBpwa /FhStWrNCWL18ekTrCAADa2tt58ZVNQ4 9IiO4Ud4QkgFxN0NxzF3iFIO/iYk583D cpufur7bOBTweyjwCQnZXFTYuuN3wH+P 1+Ptj9SV/bNiGPtOzMQV1EorIJQTP9j6 Bt7sxgAKiAdh5GAQDMLp5l+OQnW+whAN LHJLrVH7xSw7YVui00BiHUuGi2AwLw+f y4PW5DJz/R3BzSttqyDNklU+EARGZ6aB sxPpptBICuLidPrV2Px+MZWjAZ1viDki xzeKkhNSWkqVC2aLYRACyWVKZNmWx4Df B4PDSfbOlruzu6DNklUz5CkzYRPnkCez TbCAC6rrP4lpsNn7zFbmflun/0tZ2t7Y ZtkyVPWNIqwyZBKNUUzTbhzVBmRuiK32 UfdFUqYbnDAPjDYxDa8Wi2EXeA3+/ntT f+E/UREAhmXjCDyy6dB0Bqagrp6Va6ur rrD62NzTgd7SO6GDrCqlqOsNqhkOJINN sIAB6Pl/qjDbjc0d8COTmhVZ1pU6ZQ9c WX3Q2l+K7qAIVXXhQ/8iRIAqeCNm4pSl H3v2AAormsbG0VrBnQPgJAerqVR/+6DK /PO6CBQGCxpIb0TS+c1g8AOLrvqxED4J CK4Hq4+Xhz+JDtsb4mDZgH6LpGmh63lt CnqVMmo2kasif/bthXjeNYE7b8qPlH0l QfNPsC+H5jWfiQbbHsk1IRSrNYKPppYV 9bKcVn/4553qTolFQ4ggBYG0/gOFATNE I0O63md2P5SFpJ7Or5VyCCSt1HK7+i6V BtstxHSAHfBvovXgfqn3stfNSTFZuejp mYJAxAINFwMe6sDIpnnh9y7L9rX8HpGJ 68oCYgae95tAXgLa+gs/5Y8JAGj1NtiO cnYQB54nWmimVMFcu4a/5HmPX+WXE62t ix8l8E4n/jG5QapaIhaPZTvzxEQ1lFyB gBj2/fvj5uPp8wABP9+cLZOQHuvSo0fz j57VHeW/0yPtfQ9hbh+l4qDvn7axvWb+ s5+PQLIWOEUpvKNq/baMRfUsviAL8sdH FjcWg9seHzat5+dDXtJ1qiWMWXF/jCLz nol0i6n3mxYzfVK9aHjFNStfh9nj8Z9Z t0AAC3zW3n5wWhiZTjWBNvPbKKb3btQU V+2Iwpu1Ts8QU42bPip3k8tD3zCrWvlo eMU0rh9bnG+qR8oaSkxNDHiIiy+GCVL5 4lnYP9HSf94Ff4AoINH2az61Dk9jhnQh 6zb7mWgjkXILSB50ACrbL763Bjz4Vnej y0bt1Fw9s7I8YrJfF63UHFWfFaprXt9/ H+Gxg2AL16qfY23tnx/oDfGVIzrOTPnM 7E4iJyC/Ix2bLpSLPQIhWnpEKXktSOLt w19TR/uBfH/mh/xai33B7XBJSaE3Z5cS EMO4CavDUcrm2ibMtWTjni7xR1sxndpO N1GapIdaL4W/mb655asODubD01UCFgbu iQ2BAiAKQcayK1obG/o6YOer73+aeeh+ vSUMhGAEhhJRCQfLpvHxUffIS70/hHly jyABuE9D5ZVvZcX/I/FAgRAM59eCWW2u /62k0+N6qn4qJpOq2bnwtxYBRArz53St 7YW4WoqYbGowP96RFLBxFsDQjxbLSfIA YLIWIzJAKxAkr8TwLdbIbieajieeB24f 3ma+SxOjRnJ5qrE6vHiUUFyMzIIDMjA3 8gUF1bW/uChmnb5s2r4+bWO3c+37Zgwd 3XREJQizuc2ZSUlIRAGHA3OGKypOGfOg Nn/uS+rlk2C7fZQt4M7xUWjVkfYRtDg4 EwLHnAD0E7dz7fFvDo1ygI+5FILe5wZm /szRN+tADAGIQfNQCIA8GV/diPHgDEgK DUH08LABAVwsenDQDohqBJ62VKcbtALE 3R1V2j+xocBfUUSV7tbZ9Wd8BAOgNgtA MYbZ0BMNoBjLbOABjtAEZbZwCMdgCjrd MeQEQq3FKykLTDdX1t/cBhVE9RNDBpYo SDU2oBHpHf17ZY69Bk988VPm1MSD0QYJ pJcmWqn97CWzOCE3r3DxcCWJA5snOScF l8BLSusGjMA8Pl/LR/BM4AAI6OdhAxJa gfTvf/B8hHQyb0q61EAAAAAElFTkSuQm CC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Classify image");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("MobileNet 1000 class image classification");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_face_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAAEAAAABACAYAAACqaX HeAAAABHNCSVQICAgIfAhkiAAAAAlwSF lzAAAB2AAAAdgB+lymcgAAABl0RVh0U2 9mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5 vuPBoAAAp7SURBVHiczZt7cFTlFcB/59 vdkIQkJAEKScAm4U14CElQHm2hFix2xl crYx2VoLwEio5WHAsJK7Q+EgqiAZyWDs 50alucPp3WDqMOatVRoSIPKxQCA8jDQo BsXpvde0//SJCQ3ST37i7Q31879zvn3P Od/e6933e+8wkdGLQpMEphrq18R5B80J 4dZTrBAvaALj28KONdhzquKKgOfBPDC8 AowONMSxoUPWKENwQ2H3oofe9lrRd/FG 3VpMaz9etQFgImDj/PWViDji7KPBeHjQ gGbL6Q7Wsxh4DMOMxYKJtS+6Y9tm+WtE BbR4u2alLDmfrXURYRX+cBsjzqLY3TRg TekKeU+DoP4EFY0ni2/u9FWzUJ2jrbeL Z+ncC343WyDRWPdThBtr7CWPZhQBNiTL mp8Uz9GgAZtCkwylZ24fiZ6tq0KKtqFq f7E2ArgsKNgacUymn36MaB5bEZK4WbAs +r8nBEs7BHYbMoJ51YE8XCY++pWdjrP9 Ha/X6/ORpOGaJGrrfVDBOxs7ElG5FkUE uFc2JzEiNHULOr4fMBn7366iyro53Cly 4MwTKjVZz9YSrkiDKP1hdnhzZdJ4UbA/ sURkZ0PjltwpE50uzkJl0xx185Xi3mAX eA9HOh2gC8Jchfg6HQH1559smYX6r5Wz RZmuo/JjIIe6VgYyAApHVoWHp4UfqLsd 4QoMxf2R9LNgB3EP+QbUT5rYX981//9I l/x2Igf0P9wyL6fIfLAUNk5wFOxXKTi5 SVrx2NxS7gThLzvKYiPGjE7J5dXvnLOU 8+3detARE9EeVyeryfvAjm+9f0AesfLo e7IwS8gsxVr2/vnIqq2xJhM6EB8Pv93p awPgvkJtJuFL6myp/KKqr8oHGNMG/8vq jMrlhziyjzDlvcJBL1kboSCMrKsvKqfi +v1kUgMc0R4gpAmb/yerHWbFRlYqtH1w JZOKe86sstq1kZi3bMj0BZReVdWPKB0t r5a4kiK8pWVH43Ft2YAjC7ovL7qPwOSI 5F/wpgEPnFfT+ucrpybafokvtWPDdCVL bEonuFGehJ5lG3Sq474RFTBaS71bsqCA /P9/tT3ai4CsADy58rAb7nyqmrS+8Wq+ etbhQMrZmcyxCNvAZge+TeGB27akjr1D vyevQ+WQbY0+Gi4rE7XmszIjPcONM/TY +l+qhzoxMvin4r6uRIdS+R+YTdBnQpcH Gl1bqej7Kkne9f00dhhBtnCjLt0/eMCf 7LjU78SL8yf1XENLxmScYBgdVcCkKtEf 2RObwo491Qkj0YlZvF2MM6S2a0WCbHrS uleeH6SXmh8b2S9b9OdQqy7Kj5BDdIyF MY7XrNovSVYuxhqNxsYQ0+9FDGe16A43 N71QLbujSqVl83s26PEB7b3xomSMayyU 3vL38ztdsVnAj2sonNwcWvp1q2xp6hsj 12VmdtbaP7qyA7/grYRjs1Go2Zg0IfGj QHIDdNJ902vOWf3emoYpJ9Onx+STCutL qxJcWxrFNBcSGblWKfvnNU6LIs0+3DQu OH9LG6TWaocv6G3PCUor7hvd3JdmrD2I 7HasJncyk+DTx9U/MZ0YgRk/rk5OacYb 3tLoPQEOYLwPvopGB27xTbUT4yHhIagI xkPbtmetORZI8WRWsXyHxiSlPO2H727s 5sfH7Ge67Nsdxnpjc1ZKXYpxPpY0cSFo Ax/cK7185oDKb6dHRXcgKZj9zYNHJBcf N2j4dQx/bX9vsGXvztEwZXTW+yRvS19y XKz47EnRDpk6onFpcGD+VnWpNxHlDvjQ OsqcW5DTV/3p90cttBX2nYJgng6AUz6E Kz7OyVrMUAHiF32aSm/l8EzHuvH/QlnW kwaak+DXoMNoCiUh80l61Kw+qJCGynjj gV7MiQLOvzsnEtZ3PT7QnEmALzGQrvGt FS+IMRLeePB+Sjvae99v5a0+tvB5Ja7h kTVC7lWExeuj157rigQ8viK3co6SoAIq rFOfYnPyxqsbJT7RISlAQSyByYrlMGpo eYmQiDLnAcgPvHhoNTBrYc8RnGX0mHrj aOAzDt66EeQMEV9OWa4PwrIISvoB+JxY WvzgOg2hCTM9cCcb4EdzMCruq6Pi4sDT gVdROAozE5cy3wJDku0HD1GdMd/jr+Xx Oil7ggJX7HpTRup8KfupS/+gi73Ii7C4 Dyjiv5a4HNdjfi7gJgeNOV/LXAGFc+ug vAeLYDX7jSubqc4NDw990oGIC86rre+Z vqby6srhvalbCI30bYGotnIfvKyHbgFZ kVWVjVnsLquqEFG+pnDNh8IRtA2spP/0 JrEaIKrK5ZlN7pVrPu8F9Ha1IxyYlH55 uFtR8kczwgFOdYPHB9kBRfdNmmsLDlkx 7sOGnIS1cem9hMZrLjbf9mbO9QmbDiWG cCBRsDq4HltH79zonqraat9vbiZ0MUyg tfujCkMyNS4j+K8rJTr7bV+DhWZ1AVdp zwsuqdVHad8mC365etsOuUh1Vvp/DxCQ +qwvE6w7aaTiIV1TE2ddX5ttF9sfMAWS rygpfI0jHBMqNplzqOcrOfAffjYHu8R4 fk9ql6Yf2HyaT6lNz01iicCAiNocgpSQ /j+N9vwMuzXUqIjCJy3jPGEKVCtLsixL ZR8JwTz2YMCjGkd+Rj2RgSDtYaDtaaqJ 0fnG0xY5DDxI6ySsb6v+xSJHqfPLHnBD OznwH2dyeW4lWWTWxman4YcTDvFIGp+S GemNTc6buiA7uRnHWOJKMQcwBkyNIgtl kAdPvO9npg9tgg/qlN3JAXjtqxFB/ckB fGP7WJ2WNb8DrbFwoh5gEpWeA4BxjhW6 yKADKh4m3d6V+DssyJ/HUZNgtLgoTtIK cbDLWNggr0TlH69bTxuv87KqS4YqdrrX bEXyaXTDnNTENxfEbAayAv3SYvvmXVWx RTGZcFErAvIEX+FtR3G3A8XlsuOIxJul vEH/uUqY2EbIxIyfKTiLkdcJyIiINa1D NTxv/E8ZZ7VyRsZ0iKK3YiZhpwNlE2o1 CLMlNKy7v9+jgloXuDUlyxEzXTuTILpm OIZ4qU+j9KpNGE7w5LacUneBiF8vuEGV X+iJU0TorLYzor0BVeWp/by97HKrguh2 mPjPOfB+7WnU+9hmoF0OUqswsOAiul1P 9KPP4AKJInkWeu6oxAxAJClHn5WzTuMl gpXvkbakaORLiP1hIcJ0dwgsBbiNxLzc jhUhJ/5wes1RTQuVGajkrhxsA6hUeiNO 5Vlc2dnLSIQBQL1b01SzIOdCajn1b1JN wwDZXRoANpXYW2IJzGllMIB/Clbpexj3 e6B1FYXTcUkVGOD02p5CI6TyBKzYKulc HVgSLL8CmJOjbXTT4hHjqs5+PFsgxjBK BgQ+BFhCUJMAqgYuxhnR2fi5XC6rqhau RzErUjLayveSj9EQOQ2jftMSRhCU9Ry5 PwTVQVk0/izmS8kWXSHoe2z+C+WdKS2j vtFuBFotQOu6TWkvDHcdqIINTD2sGlit ZYCYuwPtuTdsvOBRKCKBEdXB0oCnv0QV GZDuQT/VhdNCxgt6gurVmc0W1NYCwUbK z7Bsh6YAzO31n1wBHQbZaRXx1dmP5Z+8 b/AVJTi2NEHI0nAAAAAElFTkSuQmCC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Face Detection");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip("Face detection");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_face_recognition'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAAEAAAABACAYAAACqaX HeAAAABHNCSVQICAgIfAhkiAAAAAlwSF lzAAAB2AAAAdgB+lymcgAAABl0RVh0U2 9mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5 vuPBoAAAloSURBVHic5Zt7cJTlFcZ/59 1dAoRbABEoN0GwdKwEkyABMoqtWMhtN5 o6LaighaotdaR4YQD5iq1KjTrq2E5rVb xRRUk2F4jWy4Ci2BFUrFbpKCAqClYgQk KW7H6nfyShye4m++Wyu3T6zOSPPd95n3 PeZ77vvZz3jfA/gPwNRVm2K3SR2OY8RC cCg4E0oBaoEZVdiO5U0VeOHU57cfOCtf VOuSVeSXcVs16Yleqp671Q4FpggtN2Aj U2PGVcoZLKgso9DvxPMSiS6/fOFSgBTu 8CU1BVHnC5QqsqCiuOtuV0SgmQW5WbJg 2eRwBvN9Luto192abCiu3RHp4yAhSUFw xX2zyv8P040AcQnVflLX8u/MEpIUBBec HwkG1eFxgTxzBBUbm0sqisvKUx6QIUry /uddzTsA2YlIBwxxVyNvr8O5oNJgFB20 WdO3gviek8QC8DzxSvL+7TbEiqAPmlvh kiuiiRMRXG1bmDq5p/J1UAFb2bJHyGRv T6ORuKRkMSBcgtL5gJTOlm2s9FJedE77 o+CkvbclLwGFfoRkjiIJjnL3wSlbndxS dQY6vM2FhU9v7JGGXeN4DsNpocPnZkwP CkvAEZf1rkQaWwGylPKFzSsvNNcLXTJi 2137c/SIoAQ08/kAX0ienoDCrwsyqf/+ WWxjx/4WXE+MTE2BcmRQCxzeRupLu10u d/oqUhr8w7BZVHHLRNT44AomfGcNmsKl cLPACE2nJSeLjK5/9tS9ucUt8EYBPQ20 Eq490OnCJwxfI1U4yYixEygLOAgcAg4A RQD3wt8IEK748xtZZlWXYYRVpb3Ap77Z TAj6rnVAcA8v2Fb6rK40R+zy/UDjhyTU uDr9Q3JCi6SRtzcYKBHRBAZf6td89DdS Uwvg2nXk1/aQoTUHzAaqCVACqagkafgI zoRxubOg9Q6S1fl+8vJEyEd42xizfP3B xs9suvzO8dDGqFwjjnfSLF0Sdw1U1r+s 5fWVKF6uO03fmo2E+fAeE2Valty19Vcg rKC1p9IpXe8nUCl9P4Oewzxs5tuccvXl /ssoOudQrndSQ34FhMASzLMnaKbADmdJ AcgBNBO/J1F/2qnSaptm1e8pZ5x7Q0Vv r8f0V0rqrkVhRW7G/5rN7TcK9Ax6dV0a 9iCrDHTl0AclGHyZtg1ERUdYzKrhjNRg dhc7gIVd7yZ8Ln+rxS3xKFxZ1KTuWjqG PAFctuHyRu99WIFIvSpSnLFnsysLWlTY y9Te2Y2o8OwpbZZd4Lq33+T6I55PkLL0 X1ri6kty0sC5X5K0uuM27Px4KsESWT9l dTDiBZ4ZaKwoqPgZgFS2CUC17Or8g/I/ xBwYai6cATdGE/Y8PfTja2LMs9f0XJQ6 APAhEDV6chTItmVtF1DhlGa8i1ZXaZ9+ ToPrvMO842dikqPbuQ2YebfP53TwqwN5 S6BuHqLhC2hXFXrizJCDdqyPWQQINDjp Eu0a35/sIb8kp9S1zwBjCkS1mpPAhNr8 +CW0suBm7oEmF7EDti17fpktJPVeUxxx wqQ1XlHhprCF3rPHx+rKb/w9AkgKreRh y3xqIyd5FlRSxNPbAcOByvuG1BVZY0nx 6ZBcvvngZEDFTdjCEngqm/CDeWFZUdFL gmWoN4QWH9xqKyZ5t/G3XZs5w27t9Tv+ 50YOGmq25a0zfcXunzrwfu6yxvRyDwDz slsLClzaCc75TgmszAP3t7+LaTwQfbPV 13RHuWuTN9icCTneHtQPxP1B2cXT2nul X+RmGEU5Ix/UODF2UG3nbiO6yv/WmEUf W6K1f8PuKNsyzLztiZfqWq3Os0l45AYb sYe3pVftUX4c+MNB41x8SIfrqnp5vvTR oSzB7V394dy3/p1PoDPVzUhZlFRB69Yv k93wn3tyzL3lhUtkTgMuCQk5wcwEb0fj slMKOisOJANAcD9HfCtCgj8AWNM0XK8p z6oMfQ7hl8ag8dsDS7LtqB5HCR0PM/ve WOqDWBSp9/fajB812BP9NYX+gsttqi06 q85ddXt9heh8PgYPqbNjL41sh+oenNv3 u4dIJ1wfEdIoQXOk6iPihHxw/SnOxRoQ gRRDi7h8dduejmO6OKX/3jZ7+u9Pl/Lu 7QeIHbBKLuBSJ4oUbgMdvY51f5/DmbvO V/j9lm/sq7tD2HswbZH948/fgIESJG8L 015rXVW3rOUJUIEW/Irt9yzpDQ+apSY2 3p+c2+GjM2SvgPcDXkrbWW7Y2VaO6GS8 aK2Nlq7IlG5TSENLXlmIjWqMouUXn36M BD21sWSZygXQGyR4W2L0w/PkFE+rXlc6 hO3lr9aq8zagLSaizJGB5855dZgckAqh z43Wu9jnxy2JwVheIgIvPWrl76YkcS7y 5EFaCXR48uzgq8PfG0UA4OdlsKB596z7 P7lb09pqg2+otgP5RX+7nLMKrJrfb1z9 xvPf1+SvqxExGbLVVlbUMw+Ot1dy5L6M qwlQB9e+ihy9NPvJc5NHiOCAM7StZgs3 vHfve+rftcg//1jfvMmWcE3/nJ2YHwkx kNKV8aiVK1VTkqwn2gf5RMK3wGiQvcAE P76GcL0gN7JgwKZQIXdJbMYxg7dURw7N QRQSAA0Y+9xSUMj0ogOgAoAdkHPBvVp5 vhvv2H9W8MSw1NAUbGgd9JbT6pcA9LDU UtWPy/wAAdmjYSA3VaKOkyDI23LU8tGG nzXl+3hyIJBYmYsDVhORnU2TIzseiZsJ wMhg8TFcwh9kvmLTWJCmZQtiUqmENsje 3SfTC43VuAdjdECYXIq4kMZyR9xRcoby YyaDuwcbn8iQzYvNFxekoTXwivSfqKiL JVPNEoQI/UR4F/JzJwVNiyJtEhG7euk2 6spfE+TvKgbJOsVdWJDvvfvb6L+0nmW2 BYkZywTZDJ1hFgWTKSQHhaMqxXkhG6db Ung0eSsC6oQT1LEhzzJFoJIGLZwDzgWM IyUFksmcu/TFi8METU+yTL2g3cnKD4z0 nWqidiu8UPUQuekmn9AfhLnGPvwsXC2G 7xRdsV36MsJn7r8m8Q8poG3qSi3VMh3X lXKg21lcDMbox5GMMsOdeK+n98iUa7NX +ZdGMtvSgAumt9vhvb5JwqnQeH12JUEX b85legdwKdvZm1jiDXylSrU/cL4oUO3Q vSndYQGlgCXI9zIV7HyCo5d9XLsV0Tj0 5djNL37kgjELgYwxxsJiIMo/HmVg1wEO FTlJcQV7VkrDzVKk6t8B9tZjFiJZcYCw AAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Face Recognition");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("Face Recognition (only 1 person at a time)");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_facemask_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARSSURBVEiJtZVbbFRVFIa/tc/p3DozvY3Ulgql0AI1BUECFRpiUJFgtJHkSKmiSdEGNeHFBh9MDPpgiCa+2fhQkJeiqNGAgkETExJFTRVCpY2ABKgUKB2GmellZtozZ/sw9EanEE1YT3uftfb//2utvdeBe2xytwDLslxKeTahdT2ahQg5Gq4qOJ7Wau/nTxyah5btaB4Ewog+hml+KNvCA3cl2Lz5+fVoaQXmZ/OvK/lHv7KoU2Q6yp+MSJ3siMTVTOAN1tZmtByZCTw3Z5QXq7qmgNti8F1wCbYYNeTQApCVYIv1wgYtuhUw4vE46bQzLWZh8CYeIw2AI4ItBo0Vr7KxqoVu8gBnA4B5+0HLslyO4iM0BoDHdEin4uAOYhgTejyGDcDOsgaO5NVQlezj64IVvHd2D+XxixAIerJmIOJ6Dk1FZqcpyFW8UT+bEn8CVzqGaUfRqZv0xDLaNkU7uOQKjYO/fvkb/H4/wMmsGSjkaX1rPTpqUznXx5rF+axZnD8e42i4Hk1hx8LUDp7nWPe7nHVy2Xjjd/wBP0pUCs0HWQm0pnLsbuWrCKsL+xk8/RvKk4+nrBaA5OVf8SejjOR4MLzFLE/08pDjIIEAItKLSJNsj5zOSoDogpGRUZSTpKLMS93qWpTLT3o4jJhuANz3L8XwhXBGBnGcUU5csDne1UNSm31vLvphvuwgNVGRLOY4Ds/WzuKtxsVoO8FA536Urwgx3YjpRnkLGejcj7YTGL4QwxLkl/7ZnAzPSkwGn0bQ0LB1FUiJx+OhNOTJJJTjwywoR8SYSFIZmPnliMufEcRY16TEshpXZiVobm7OcRz9JeAGiA1l7r5yB3HPXUuHt4jdoWp2h6rp8IZwl69F3SKIDo6/E7dS6lPLssbVjPdg4EaqSgzKxvanrtlE8ys46i/he1eICDkTsoLVFDLK+pEwTw5e5cK1PyZ8mgqlfOXA+SkEQ6NGj9dIDwG5AGcuJfgqUElnoAj6whDvn9KnSNDPZ8Vz6ZQANT0/TXbFvV7pnVaiQ4f2DojWzUASwHE0D7cdptBOQXEIzIkeYBpQHKLITrGq7dvMw8hYTEPTvn37kmMfps3BxsbGgnRaFuBIG8ISb+V9dL68kRPefBgrtYLliShL2o6QONcPcArhJdPUF9rb2+OT8WYc15bVuFKJOgyERImzbtuCwa7S0qCgqb5yNf7jnr/92tEK6Ef0UwcOtHdkw7nj/6Cp6ZnAnOpH32lacLnogZBZjz2cB4DhjfZE7IOfnCmJXL/Y8XZr6xeDM2HMSKCPtuTiMw6+dvqRZS3zuworfFMy5+Kwn93nl0Y+rvn5BB5vvazYNZwNZ/qoGLNcYxfwWF3h9eT7V+rOLsuL9E12n4wVFNcVnJsDPE5yeBew878RwBaAUp99ozs2r6q7f17V7QENRd29wGyg4X8Q6JsgqYR4/9KILVqnp3hFjIR4u4AUyNAdhN5b+xcLPYieY7p/TwAAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Facemask detection");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("facemask wearing detection");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_hand_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALtSURBVEiJnZVNaFxVFMd/594374UmtRWh0kUXWiqTaKXaBkkXQhctfi38YOpG1yKVEtAkuBAGaTchIBVEcGEXals6Ni7EguCiGw2KEbNo2mghBLQodFWnvszLe+e4yMz0ZSYzefVs3j33/M/9nfvx7hUK2u8fPhvp6tDXBqMmnBieqJ0rkueKArJ4+2GDo8BOMd4umhds1mkXK35phbMYhw2ZGp68eEm8DpjKehwGAJZmXimruksCsbfsxX1Ts38UmsHSsj6B8TqwV7DpXtWZ+nGBEeCgin8N4NdTL7z043vPjPUFQOlmznl48YOXd/dAjLZaCn9dn668GZaiWc2y7+erzx3vCShPXbgJrLR8SdxYp+ZqtRICj7U1or9gjDtxOO9Elaf7zADMZO5uMl0AN8R+IGy6q5jfjvCIqpKqkqp81Bcgjrmc1wVAOdguBhYEXgVoJAmBc3+PnfrmWl8Amv2Q8w6RuWhDAciT7dnAAtjxFsB5dz4X29zqOx9YAP5tupHCgY0KawMMdhk8mGYZqpnViU9vCTj0xidrZvzcrlisvUwCJWB/Tj7cqt57f+NI9cqtLQEA4iy3DzyVaz9E82dr2l6AZC3BBf7j/Bh9Aab8lHN35NqdN0Cgqqgq8ap9TqfQqlW3NLj4FqZ7TGR2eKI2B2Be50V9vxruFtP8ZlFs+f4A4LdtVysYZ0AQ451r05VFzD5NkuRWoxFT8gFRFOFECsG6AGnGvPMsNu8VBEYQmYmCiNCHrKUp9Tt1ojAiCsP+I3aYA3j03dqNOzvuPwCMI9TzAhEhLJW4b3CINF0jzbJ7B8D6sSxP1s4AjwOXu5QiDG4bJPDF9qQL0LLyRG25PFl7HqMC/Fl0IFND1vd6wwr0PKblqdqXfiAcQfisCCBuxJSC8Lsj1SurhQAA+05+cVvgq36aTJV/6vWGCDOj718+1hnf9Mm8F2s0Ghi6PFr9dmKzeOFH///aloDM3AoQ94xrloi4673i/wGmAQ1INRUIkgAAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Hand detection");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("hand detection");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_garbage_classification'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQPSURBVEiJjZVbbJRFFMd/Mzvz7aUX2u2WthRBLkIkXLTcxAgRH0CDkWCCipGEgAqaSJBHiDwYniQ8qPHBGCGoDwqBGhMCRIkpESSGWyAEKVVKaDDQ7ZZt2cu3+30zPpQutN2vcJJJJvP/n/OfMzPnTIhRbPXq/aE5S5Z2TXtmubly7sjp0bhBJgYnX3fObVI+Ky2MGVyzvlYdf83eaeJuV7Qhc2lwXfrC08r7eXtL657HEviuY/bYIuFLYMcOJ9zN13AjNamsYyKW/PyTea1bRhOQAAXrLC8XfDSzQNaLrnkUTwEUfF2HkWUJrqvw8rYslvdl7FECYsOhTTNNUZzzPaHLEQpZl0yyLzBARX3l6R/f3bsoCJdSckQotIpYyg5HoCI6cBTvFZ5bd/D9t4MEVDTuqYce0wgrVoSQqiYQB3B08P0pYcV5IcwSIU1FOYIvFEKGgqML64eUdz4QBvi2Y8EqMIfKEYKeKUCVc+/Gui8XvRCSoWfv9WcWaK1+e/rA1rYRAnv/bVlsjDwxPIAUYSZXbuef3rtcuPP7EKwyo1nxR3Nf083aKkAkk2mwFq1USkWct2Yd2PIr3H+m1tc9CH/EDkPCoT7SQt24BqaMmc/Ba5+VsFePT6bxTqx6uE/R8+Imaw4DDtwvND9ET7kjKJp+jt5cS3fmb+oqptLSsOxBdqbsqQFgQFqsLAmYlJdioDgBqA8vZNm444yPrcBiyXr9AMxtfI0Xnxgo3sMvdZKrcFMAuaxLPpsdEJbCCzuRNQJhSgIb550tAv0AMdXM/MRuHFnNnPgOEpEZNMSmACCEQ310AgDpapdjr1zZd6bS6Wx3BKeqIxytjZizY2MfzG7dcqCUaSkvMXBMrknR3r8HsNzOnaCv0MVPVz8lV0zS53ZxsH0XAONTCTi5+MNjEfvkL40x2qIOJz1fnvDMN2c27ts9GFaVBCxJYJJvcnT07aHWmUVNeCbVTiOul+X7y9tK1HimilUXnsfROtzl36JGKHwnS3fRY5t0iOazW69v/uHipC/e2fdwhxty0RdTO8l73Swd9xUrn/p4yCUuuD6dsKfJWJ9e47FQVfGy0hhjuQpgLTbn7hqWge1BPGgZrunhVPd66py13Ew7pfWQkUy/PR6AsJDMUTEmyDDNRtIU0TTb+zFct/7aR/tnlATSxXjIK4aoDPcTVi4AxnpcS7cOqeTmdB3aH2gdGsHrTgIAXwh22AcbAdBefpMC2Nz23hudSfsmCKSwTE20E9VZytmEnsf/l6zvL5MAVrDeL0jR95/G9wW9uXigU1M6GBthnj9RAggrbkhtCVf7CAlauoE+rio8voAU+QGBotmhlP9ntNKjNtZLoqJs5wCgbdplbo1JYQXl/9FBUzononrD/610h4vV2IMEAAAAAElFTkSuQmCC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Garbage classification");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Garbage classification");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_cat_face_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS1SURBVEiJnZVLbFRVGMd/5z7m9t55tqVQLFMEKgUpYEHLQqMJiZiYYEy0sEGTEkJcGCPERECMN4ZIggILIlESBB+gUnWDCzUgIS4EQ2IKhCKQ1gK1LYXOtGVe9zHHxUwn0ymE6H917nfO+f2/8/jOFVSoc8fWD6Vgg5B0Ss/YvMa271aOKdcx2w4JLbdHCtql5MDa7TvfLu8X5R9f2XYkoOdGALXY3a0I2fHytp1n7wX/7oOtK/JSHAK5sBjyHdeoWWfbYxNjlPIJAStlFeCCgK4RtoyF4aB15vhH9mcAp2xbO2XbGsCPe+xPw0HrTNgyFuqaOpGrWmSUpFVmJRSBVRVAV1UUVaW6vh5F5jvOHt7d4TtZAP44vBstFEWiMDI4QFBVcH2fdMZBVvAmGah+0AqaCooiiNXPRGTHyd0ZmLI1npPFGymYxaJBMEIkBgcIW1WkMoFJK5i0RZrphBRFMD3eiJccws2mp8Ar5WZSuMkhpscbURSBZjqh+xoA1M1qJD1884HgSqWHbzJtVuOU+CSDGQ3Nc3LJof8Mn5CbHGJm44Km8phmb9xoPZpI5NZ0dvrRiLklkXD/t4HvucQs4y3gh2Pt7eql6mpDvL/hlT4gAvzasmDuC5EAmlUVuDdBFMtGVt6VgtJZhzFXuhe7e48DK4FRTcr8egVlrYRnL17u0QBMQ2d+4ww0VeHCtX6Wzp9FNGRixqYBkEkMM3o3Q9eVmyxuasDL+1zpu0Um5wLoSJYJ6MyT/1Z77+CRk8DJvvPnq6+e/n5kZDRFYiyNBHRNJWQZ6HqhsEPTG0oGmqYSDlahqQqunycSNJk9s4aaSJDlq19srZ7TmoSyOmhcvDg5+OcJqauqqDIC1IQtFEWwbEHhZqgBg9p5iwAY6e0mCLQ2xwvGlkQVEAmamOGwnIBDsb53dHTEpequj0aj7yTHxnWk5LHmONOiQQDM6jrmPrOa4eHbANTVTaPn9HEyiWEAkuMZznX3IYBILOQkk6mdqq8e3H7o0A0FIK962yTiXdfP35r7UC1ti2aX4Eakmvmr2kmOjnN07y6O7t1FcmycR1a1Y4RjAMTCJisWPczcWXX4PkMCud1X/a1QrIOYGXszoGRrN+/dH29Z0pKMBM3Szahf9ASaYTL8Tz+GaWKYJsP9/eiGyYyWttK4cLCKlqUtiU179s8OKNnaajO6qXQGb+zblwNyWw4I+s6ceNJJj3d5mZQGEI3PI5NO88s3XxKO1aAogp+//oKmxUuJxedx/feCgW6FvOD0hqeFEBIYnXQGlRq4dO7zoctdr7rpuyxpfw0Az3XRdH1K+3znJ+hWiNo5zR/HW596vZI15bmWtq0MpMZXzVn5EuR9pJQIIUpAoNSWUjL/+XX4Tpbxrt+ek1KK4gpKmvLY/d3W1Ja73V/vJoYQmo7jODiOg+d5+L6P7/t4nleKC1Uj3XOefN5r6vnpyOOVvCkGQmE5QKrnAtJzS5lOgCeMZPG5yA704o7eKcCkeLCBlLIOIO9kSfVerOyeJD9zl/T17rLs8jMevAKEOtHO3bqBMzJ4b7qUpK51IX3/nnPva5CHv4DSrHTPBfLFf3G5Mjev4o7dKQ/5xbmT9C/RouT3ELR2yAAAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Cat face detection");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip("cat face detection");
        this.setHelpUrl("");
    }
};

// Blockly.Blocks['aidude_wake_word_detection'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldImage("data:image/png;base64,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", 24, 24, { alt: "*", flipRtl: "FALSE" }))
//             .appendField("Wake word detection");
//         this.appendDummyInput()
//             .appendField("Threshold")
//             .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
//         this.appendStatementInput("code")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(180);
//         this.setTooltip("wake word detection");
//         this.setHelpUrl("");
//     }
// };

Blockly.Blocks['aidude_head_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAR+SURBVFiFtZdLbFRlFMd/57t37kx5FJBSKChIWAg0RBsBRbA8AgQaEhY1JcQYdkaCRIx1YQIyBFdK0IVuZCEBNKFKIkTBEKPykMQKRMVHoEAgRaA0BVpK6Tzud1zQGZnHvTMNejY333n9/9893/keMq9hq5InBpl/9ODGo/n6h5Fpz62rF8uRfL078PWBKxmlGvrDkukeKvGZjaUmddPMFcNFN2Y/lbX8HRRj1PQr9nJmLPCogiMDf+Dy8YObHi81C93FTLVsBpYCHkDikslmxNMOU6HN0Q3sKZVr+rPrLgGTTClHAG3B8XeyXS2twIoMeK4TkJCx9rbZnXxXTmpLEZ8iUpKAxjHax16B17k/z5Li98nTyQtyUePZEgeKa5D5YTW3k4mL0lgOcE5cQiYkhvAt6IJidhHTZMXGQmeku5islr+AaJBPZg1ItBpN3MhDAXekXRR5je+D4kNLYH2aw8BzsKrrC5UKNiEfhMUFElBFRFhZFnjlVNyqRcXzJKVW48E4wX9gD+OACeUQcCetwYiHqZpXSCCNk3yEqYMnYBlXDripacBxq0EhMnENRIYXOqWYMXgCECsFbofMxKtp5P4mAKKCN+M9TMX4HD9xqAzKUbJPC8VBY7XYkSuww+pxuq7mWI26eNO2ku5rw792AO3+MzRbThvq/h1jwfkQqFPXxNLDRo1G/F405YEfAYmqM8KAk43xugK3/yxCT0dnZ19Xdw/CaTHeq+PejGf7Ne8PONuAFzImdWJQRilCRcGKOwYYgzJF/eQ9YE3GnL8GnnwosPIY1T04yieQDgv9rf0OrRduYwtuEGAVjl3o4VR7bwkCJgcjl4ByOCz0/UOXeGvvOZJpW2BLpi2vtLQRP3S5SOQDEKrfPDjOXQMdqU3UuNdRnsGYaiBne1s0fTQ3e5O4pvAIcR1hVV0VY4YXnsJuxD0FtKnITzWjOj960BZ4GKV+PDTHqjkROh3K6ALAHzL0ZXfJqh3FbGVdSP5PCT6McO79ZyhWegZNIJlMXS+mlxvncX4/iNzK3mFJnzlD38efkGr9uWguxzO/DprA0AUNHVB4y5W+WzgnP8c5vQ+sD+kUd3ce4O7XZ7GdnQV51Dg+CxrPDZqAiKigX+br7WNPoSPHY9p/IfJFM10vbSZ5/g5ulYu3eHFhIjfyh4gU9m0pAgC+o9uARI7SiZBe2oydWIck7qIJS/SJSkZsXYtEC1vQl+iGMAypb3inXg39x77a2FrMIXH88BbQt4tGWx+vsx3cSPEJeBU/uMtXLyxmq52zfrYVGzMWPaJWW4IYenNPbAH2FTUaJxBcI9ErTuzskqC8qrZFLEdK7gMicetd7V4lqtvJ3DxCA0C9ipPSG5kiC+OhZwuUuRFJU5PvPb/sDbE6E/QA+etiAFkj3nW/YtiLZvnqWdLUlCwr98DbMOdxKkaagtYEgB7fP7xfYrMcqxOcvu65Vkyba81nsqzxWlBM7Zz1s1VtttSZx2nmMHKASVmjDb+EyLyVd4DvBoa7w3wzYsXGRP/FyNTyH4bbk4P5gQR4AAAAAElFTkSuQmCC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Head detection");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("Head detection");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['aidude_car_classification'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANZSURBVFiF7dRNaFxVFMDx/7nva2aSTNo0IZ9NWhrRElpaWhPpVJsSsJ0MlYrgyg8km6q4c1WkLQii6E6IuCi4yqYIak2bCmL6gTiFIFKxSoyZKLRNOybzZpL5ePPeu66iYBQ1U3Azv+29555zz70cqKurq/ufSS3BP42O9hla9yiRplCkCZFNaN0AFBHRovViCLOrsdjcwLlz3n0pYD6ZfEQpdWJB1JPfihF3wwDH93nKVHzoh7gacvE4DZ5HTCn2V0rsEKnYwiWBs72Tk59sqIBMKrUTrd+4Lsbx801xXK+KZdtks1keEjhpG7xc9gkaGtm8uZlczsVQCjefp0uEV21FmwjAlTAInt8+NZUBUP+UWA8Pmz+nUieXQ/3NO9Xw+ESsEc+w0AL5fB6tNf0iBEBRKZqb4xQKq0SjUfKFAgC3tOYjX68d+ZgyjJlfRkeH/rYDs8mkY8JeZRiH0XosDztOVQJWHIe21lZyyy4x28LILdEowtOmYpvAhLIJLJM+r0xEKbp8n7hAHCGyPtPtkmE8KAD6zBmVSacHlcgTiIwAewB7bec9rclqMJRBo0C7DjH+7dv9BbGg+7TLytfOaXPh2LGDWf/LjzterLQUrjiUblrrAtpEaBOAEPS65f9M+7CStqkuGrbp9FbHYwNeS/GGxdx3iuvFIgAPOw7dZi33/EOoNemKx4Lv02kYJCIOufNRgGFZSKVKQORyqcx4uYrpOIDgl0u8EnM4GHFqSh4Ary3nmTdMLMui6vu0eh5vt8SJimACuqQ175Uq7No3yONHjiBopqamGJ+ZYb9jE5GNz6tPV4ss2A7PPvcCnZ3t5HJ5Pjj7PhOFVcbijSUFZOaqPpgmiUSCrdv76dn2AAcSCWzbCuerfk2v/qvWma29vXR2dtDT18+WLS3sHNjFLbgjWo+ZgWEc9vGeaVfqhOsW+pcWbxMCrpvHt6w3N5nqLdj4p1+KRYtuzl3yq34sn1vCq5TJ3r0bZo2Gvb0XLtz5vbfDw6MdKqq+Shw41BcSkr52db6igqGrFy/eq6UDAIdGjr7U1d317u49+9T3P9wk8+Ps65c/v3QK/jSIhpLJuO0FowJaBd7k9PT0Sq3J1zw6cnQ3Wg9qrW9c++Kz9P06t66urq5mvwENmU4th7X62AAAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Car classification");
        this.appendDummyInput()
            .appendField("Threshold")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "Threshold");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(105);
        this.setTooltip("car classification");
        this.setHelpUrl("");
    }
};

// Blockly.Blocks['aidude_qr_detection'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMMSURBVFiFxZdPSNRBFMc/aythJqmXkg6tLf259Ifs4KVIqZCICGxPFd0iKjp08BhEh+ySRUFURBBEYFR4KaQgiCgPSVhBKWSXIKlcN40yTbfDe+uO48xvfv3DLwwzb968P/t+O++9AUEt0AF8BfKeMQQ0EEajnvXpGQHuAKmCQC2QixAwx8kYDrTG1JUDUkmgDVigws+Adx7FQ8DZGA6cAap0uLAUqFObbSAhyavxRAwDf4sE0K02h5PAfGX06ybAWmCZR8EE8Aj47OCVAVuAuQ5eH9CjNt4C64AKKH6Tdj24Ro1Efb/nhuJqipG7FiEzobpRW3kgX+LwdDng2jexUueDSCRuKb0iQqZEdU9DMmDoNNBl0C3AeoPeivz6JkvuE3BI1/XAUZ+BkANdwE2D3mPxE9ZcwDdLzotQqP87ksj9rtL5X2Ex8k8HKHfwczpnk0Az8i3jJJkQfuicRBKOjVGdjwGDQKcr8WQoXsl+pkcmDVSqojKkfuww6M2qfJ5D7yvggOHElKc2xoy161cAjHv2H+iIDZcDD4FOojPhFQ/vPLAfKHXwssBe4O7vOBhCB5LRviv9k+gMetlW4IpAOXAVf/hNpC16js7vgacWbxQ4FUMnTcSr5+b4orIDSp+LYwjcEXiMhHZVTB3jwAVdb0O6phtIea8zzvUCG4GPprCv/lcjnZILOYpJplR1jFlnViOl10YzcNvebETaqEVKp4nuDfPAYT3/AamGtcBC4ASwQfW0IPnkiSGXUV4N8n9ogGIDeVGZuwLGC73DdoPerfJ5JMOZyDgcuKR0NolkNij2cOZnuQ68NOhWY11irQvy1YQxZTNUjjuYXlZbfQf/FCEH6iN4Zo3IWryMsY7SEXTA28kg1/UI0oDeA/YZvHanREwH+oBJopuV18xMOG8CtiaRXBB0oAdpmWc0kIoR4L5j/zhy5So8cr3AC5/CWXuYJJCH4k5ldiNNiAs5pNkYCBioQaJR6eGnkQijtkkxO4/TIYwXckq9GYkQGAQ2xXCgAbmWPj3DyENmCcAvK8MVzwRgkLUAAAAASUVORK5CYII=", 24, 24, { alt: "*", flipRtl: "FALSE" }))
//             .appendField("QR Code scan");
//         this.appendStatementInput("code")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(90);
//         this.setTooltip("Scan QR Code from image");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['aidude_line_detection'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMMSURBVFiFxZdPSNRBFMc/aythJqmXkg6tLf259Ifs4KVIqZCICGxPFd0iKjp08BhEh+ySRUFURBBEYFR4KaQgiCgPSVhBKWSXIKlcN40yTbfDe+uO48xvfv3DLwwzb968P/t+O++9AUEt0AF8BfKeMQQ0EEajnvXpGQHuAKmCQC2QixAwx8kYDrTG1JUDUkmgDVigws+Adx7FQ8DZGA6cAap0uLAUqFObbSAhyavxRAwDf4sE0K02h5PAfGX06ybAWmCZR8EE8Aj47OCVAVuAuQ5eH9CjNt4C64AKKH6Tdj24Ro1Efb/nhuJqipG7FiEzobpRW3kgX+LwdDng2jexUueDSCRuKb0iQqZEdU9DMmDoNNBl0C3AeoPeivz6JkvuE3BI1/XAUZ+BkANdwE2D3mPxE9ZcwDdLzotQqP87ksj9rtL5X2Ex8k8HKHfwczpnk0Az8i3jJJkQfuicRBKOjVGdjwGDQKcr8WQoXsl+pkcmDVSqojKkfuww6M2qfJ5D7yvggOHElKc2xoy161cAjHv2H+iIDZcDD4FOojPhFQ/vPLAfKHXwssBe4O7vOBhCB5LRviv9k+gMetlW4IpAOXAVf/hNpC16js7vgacWbxQ4FUMnTcSr5+b4orIDSp+LYwjcEXiMhHZVTB3jwAVdb0O6phtIea8zzvUCG4GPprCv/lcjnZILOYpJplR1jFlnViOl10YzcNvebETaqEVKp4nuDfPAYT3/AamGtcBC4ASwQfW0IPnkiSGXUV4N8n9ogGIDeVGZuwLGC73DdoPerfJ5JMOZyDgcuKR0NolkNij2cOZnuQ68NOhWY11irQvy1YQxZTNUjjuYXlZbfQf/FCEH6iN4Zo3IWryMsY7SEXTA28kg1/UI0oDeA/YZvHanREwH+oBJopuV18xMOG8CtiaRXBB0oAdpmWc0kIoR4L5j/zhy5So8cr3AC5/CWXuYJJCH4k5ldiNNiAs5pNkYCBioQaJR6eGnkQijtkkxO4/TIYwXckq9GYkQGAQ2xXCgAbmWPj3DyENmCcAvK8MVzwRgkLUAAAAASUVORK5CYII=", 24, 24, { alt: "*", flipRtl: "FALSE" }))
//             .appendField("Line detection");
//         this.appendStatementInput("code")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(60);
//         this.setTooltip("Line detection");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['aidude_circle_detection'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMMSURBVFiFxZdPSNRBFMc/aythJqmXkg6tLf259Ifs4KVIqZCICGxPFd0iKjp08BhEh+ySRUFURBBEYFR4KaQgiCgPSVhBKWSXIKlcN40yTbfDe+uO48xvfv3DLwwzb968P/t+O++9AUEt0AF8BfKeMQQ0EEajnvXpGQHuAKmCQC2QixAwx8kYDrTG1JUDUkmgDVigws+Adx7FQ8DZGA6cAap0uLAUqFObbSAhyavxRAwDf4sE0K02h5PAfGX06ybAWmCZR8EE8Aj47OCVAVuAuQ5eH9CjNt4C64AKKH6Tdj24Ro1Efb/nhuJqipG7FiEzobpRW3kgX+LwdDng2jexUueDSCRuKb0iQqZEdU9DMmDoNNBl0C3AeoPeivz6JkvuE3BI1/XAUZ+BkANdwE2D3mPxE9ZcwDdLzotQqP87ksj9rtL5X2Ex8k8HKHfwczpnk0Az8i3jJJkQfuicRBKOjVGdjwGDQKcr8WQoXsl+pkcmDVSqojKkfuww6M2qfJ5D7yvggOHElKc2xoy161cAjHv2H+iIDZcDD4FOojPhFQ/vPLAfKHXwssBe4O7vOBhCB5LRviv9k+gMetlW4IpAOXAVf/hNpC16js7vgacWbxQ4FUMnTcSr5+b4orIDSp+LYwjcEXiMhHZVTB3jwAVdb0O6phtIea8zzvUCG4GPprCv/lcjnZILOYpJplR1jFlnViOl10YzcNvebETaqEVKp4nuDfPAYT3/AamGtcBC4ASwQfW0IPnkiSGXUV4N8n9ogGIDeVGZuwLGC73DdoPerfJ5JMOZyDgcuKR0NolkNij2cOZnuQ68NOhWY11irQvy1YQxZTNUjjuYXlZbfQf/FCEH6iN4Zo3IWryMsY7SEXTA28kg1/UI0oDeA/YZvHanREwH+oBJopuV18xMOG8CtiaRXBB0oAdpmWc0kIoR4L5j/zhy5So8cr3AC5/CWXuYJJCH4k5ldiNNiAs5pNkYCBioQaJR6eGnkQijtkkxO4/TIYwXckq9GYkQGAQ2xXCgAbmWPj3DyENmCcAvK8MVzwRgkLUAAAAASUVORK5CYII=", 24, 24, { alt: "*", flipRtl: "FALSE" }))
//             .appendField("Circle detection");
//         this.appendStatementInput("code")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(60);
//         this.setTooltip("Circle detection");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['aidude_ract_detection'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMMSURBVFiFxZdPSNRBFMc/aythJqmXkg6tLf259Ifs4KVIqZCICGxPFd0iKjp08BhEh+ySRUFURBBEYFR4KaQgiCgPSVhBKWSXIKlcN40yTbfDe+uO48xvfv3DLwwzb968P/t+O++9AUEt0AF8BfKeMQQ0EEajnvXpGQHuAKmCQC2QixAwx8kYDrTG1JUDUkmgDVigws+Adx7FQ8DZGA6cAap0uLAUqFObbSAhyavxRAwDf4sE0K02h5PAfGX06ybAWmCZR8EE8Aj47OCVAVuAuQ5eH9CjNt4C64AKKH6Tdj24Ro1Efb/nhuJqipG7FiEzobpRW3kgX+LwdDng2jexUueDSCRuKb0iQqZEdU9DMmDoNNBl0C3AeoPeivz6JkvuE3BI1/XAUZ+BkANdwE2D3mPxE9ZcwDdLzotQqP87ksj9rtL5X2Ex8k8HKHfwczpnk0Az8i3jJJkQfuicRBKOjVGdjwGDQKcr8WQoXsl+pkcmDVSqojKkfuww6M2qfJ5D7yvggOHElKc2xoy161cAjHv2H+iIDZcDD4FOojPhFQ/vPLAfKHXwssBe4O7vOBhCB5LRviv9k+gMetlW4IpAOXAVf/hNpC16js7vgacWbxQ4FUMnTcSr5+b4orIDSp+LYwjcEXiMhHZVTB3jwAVdb0O6phtIea8zzvUCG4GPprCv/lcjnZILOYpJplR1jFlnViOl10YzcNvebETaqEVKp4nuDfPAYT3/AamGtcBC4ASwQfW0IPnkiSGXUV4N8n9ogGIDeVGZuwLGC73DdoPerfJ5JMOZyDgcuKR0NolkNij2cOZnuQ68NOhWY11irQvy1YQxZTNUjjuYXlZbfQf/FCEH6iN4Zo3IWryMsY7SEXTA28kg1/UI0oDeA/YZvHanREwH+oBJopuV18xMOG8CtiaRXBB0oAdpmWc0kIoR4L5j/zhy5So8cr3AC5/CWXuYJJCH4k5ldiNNiAs5pNkYCBioQaJR6eGnkQijtkkxO4/TIYwXckq9GYkQGAQ2xXCgAbmWPj3DyENmCcAvK8MVzwRgkLUAAAAASUVORK5CYII=", 24, 24, { alt: "*", flipRtl: "FALSE" }))
//             .appendField("Rectangle detection");
//         this.appendStatementInput("code")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(30);
//         this.setTooltip("Rectangle detection");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['aidude_color_tracking'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMMSURBVFiFxZdPSNRBFMc/aythJqmXkg6tLf259Ifs4KVIqZCICGxPFd0iKjp08BhEh+ySRUFURBBEYFR4KaQgiCgPSVhBKWSXIKlcN40yTbfDe+uO48xvfv3DLwwzb968P/t+O++9AUEt0AF8BfKeMQQ0EEajnvXpGQHuAKmCQC2QixAwx8kYDrTG1JUDUkmgDVigws+Adx7FQ8DZGA6cAap0uLAUqFObbSAhyavxRAwDf4sE0K02h5PAfGX06ybAWmCZR8EE8Aj47OCVAVuAuQ5eH9CjNt4C64AKKH6Tdj24Ro1Efb/nhuJqipG7FiEzobpRW3kgX+LwdDng2jexUueDSCRuKb0iQqZEdU9DMmDoNNBl0C3AeoPeivz6JkvuE3BI1/XAUZ+BkANdwE2D3mPxE9ZcwDdLzotQqP87ksj9rtL5X2Ex8k8HKHfwczpnk0Az8i3jJJkQfuicRBKOjVGdjwGDQKcr8WQoXsl+pkcmDVSqojKkfuww6M2qfJ5D7yvggOHElKc2xoy161cAjHv2H+iIDZcDD4FOojPhFQ/vPLAfKHXwssBe4O7vOBhCB5LRviv9k+gMetlW4IpAOXAVf/hNpC16js7vgacWbxQ4FUMnTcSr5+b4orIDSp+LYwjcEXiMhHZVTB3jwAVdb0O6phtIea8zzvUCG4GPprCv/lcjnZILOYpJplR1jFlnViOl10YzcNvebETaqEVKp4nuDfPAYT3/AamGtcBC4ASwQfW0IPnkiSGXUV4N8n9ogGIDeVGZuwLGC73DdoPerfJ5JMOZyDgcuKR0NolkNij2cOZnuQ68NOhWY11irQvy1YQxZTNUjjuYXlZbfQf/FCEH6iN4Zo3IWryMsY7SEXTA28kg1/UI0oDeA/YZvHanREwH+oBJopuV18xMOG8CtiaRXBB0oAdpmWc0kIoR4L5j/zhy5So8cr3AC5/CWXuYJJCH4k5ldiNNiAs5pNkYCBioQaJR6eGnkQijtkkxO4/TIYwXckq9GYkQGAQ2xXCgAbmWPj3DyENmCcAvK8MVzwRgkLUAAAAASUVORK5CYII=", 24, 24, { alt: "*", flipRtl: "FALSE" }))
//             .appendField("Color tracking");
//         this.appendStatementInput("code")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(0);
//         this.setTooltip("Color tracking");
//         this.setHelpUrl("");
//     }
// };
Blockly.Blocks['getdata_classify'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get classifier")
            .appendField(new Blockly.FieldDropdown([["Class ID", "__class"], ["Confidence", "__confidence"]]), "varname");
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['getdata_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get detection")
            .appendField(new Blockly.FieldDropdown([["X", "__x"], ["Y", "__y"], ["Width", "__w"], ["Height", "__h"], ["Class ID", "__class"], ["Confidence", "__confidence"]]), "varname");
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['frame_rate'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get frame rate");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// Blockly.Blocks['num_img'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("get number image for save");
//         this.setOutput(true, "Number");
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.Blocks['num_mic'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("get number mic for save");
//         this.setOutput(true, "Number");
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
Blockly.Blocks['__status'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get status");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['__vflip'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set vflip")
            .appendField(new Blockly.FieldDropdown([["true", "1"], ["false", "0"]]), "_vflip");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['__hmirror'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set hmirror")
            .appendField(new Blockly.FieldDropdown([["true", "1"], ["false", "0"]]), "_hmirror");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['face_recognition_save'] = {
    init: function () {
        this.appendValueInput("_id")
            .setCheck("Number")
            .appendField("save id face recognition");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['face_recognition_del'] = {
    init: function () {
        this.appendValueInput("_id")
            .setCheck("Number")
            .appendField("delete id face recognition");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// Blockly.Blocks['save_mic'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("save mic");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.Blocks['save_img'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("save image");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.Blocks['save_value_1'] = {
//     init: function () {
//         this.appendValueInput("NAME")
//             .setCheck("Number")
//             .appendField("set  value 1 name save");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.Blocks['save_value_2'] = {
//     init: function () {
//         this.appendValueInput("NAME")
//             .setCheck("Number")
//             .appendField("set  value 2 name save");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.Blocks['init_save_mic_img'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("initial")
//             .appendField(new Blockly.FieldDropdown([["save mic water-fall", "2"], ["save image", "1"]]), "__moders");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };



// // // Blockly.Blocks['aidude_yolo_20_class'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,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", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_OBJ_DETECT);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(180);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_OBJ_DETECT_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   // custom xmlToolbox
// // //     xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_yolo_20_class'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_id</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_object">
// // //                 <field name="attr">class id</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_yolo_custom'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,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", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_CUS_OBJ_DTECT);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(180);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_CUS_OBJ_DTECT_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   // custom xmlToolbox
// // //     xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_yolo_custom'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_id</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_object">
// // //                 <field name="attr">class id</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_mobilenet'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAAEAAAABACAYAAACqaX HeAAAABHNCSVQICAgIfAhkiAAAAAlwSF lzAAABuwAAAbsBOuzj4gAAABl0RVh0U2 9mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5 vuPBoAAAm+SURBVHic7Zp7cFTVHcc/59 7dZLN5LkEDJWLklRJxkBSKFa0PRGfQsW g12mKttI5O0VGrZTo6KjKdsTPK21pROy o42jHFRAEZAxYf6BQ0GHwEkEgSIoYQsm ye+95z+kde+8ju3mQ3iSN8/zvnnt/v/u 7n3Hvu7/zuFUopRkuLFj10jjD5rgNxCa ifgBgPYhyoFKAJpZoQ2nGB/EIofVtZ2d oqleSAxUgDuG7xUpvZbb4PwQ3AzEEZCx pRbFOaWvdW6foDyYhnxABcc/uy9DSX73 6h1DIgJ0F3EniVgPZEefma+kQcjQiAG2 ++70aF+CeKvJjB6DopmVZ0kwl3WyfS54 vn2otglVkcf6y0tDQwlNiGFYAQQiy66b 7lKB4HRPhxa04W+RdOZ2Lx+YwtyMdsy6 LNZMIuFS1SgVJYupx4axs4ubuSlj1VUc 6kKgjot5aXr2kddIzDBaCk5J4MvzJtUo obwo/lFuQz59ZrOefC6SAiuPSpXSmapO K7gEIBGT4fXTt2U1u6HaQMH16jI6/fvP mZQ4OJc1gAlJSU6D45vgKYH9xvtWXxiz t+zaS5M2NeeLhalaLaL3H1hGrx+2nb+C aNH+wNGymaAxpztpSubTDqWxystu/RoM BwNAZUtvWdzL2fVVqD+86aPJGrl92J1Z Y9JJ9+4Bu/5LjspqAB+ieVHN7wevjQqo DXfcmWLc87jfg1CZibzHug8vMq9n5WGd I36eJZXL50MbrZPGS/JuB8k8ZYqTjglw QAOW82Mwry+fqRlcGPxCw9xfIycIsRv9 qQIxpA9lMOyre+E9I3fvpkrrj3dwldfL DyNEGRqT/srgnjKHpkafiwkkU333+nEX 9JBfDervcJBPrfRhljbVz14B/QdD2Zpy FPExTo/WuIq3ASBb+5PmSMpnhiyZIlln i+TOEdUiq2vfsura1tgwrK4/FwpK6+v0 MI5j9wB5asjEH5MarJuoZDStp6FnHTws vJ+nQ/7Ue61z8FE1rbs+8BVsXyIw5V20 OWgI6OTv6+ajVSJrYyTLroQub/eUlCPu KpVSkqff2vw/QTLXz9lyeDh9jNmr+gtP TZzmg+Iu6AzMwMHn7oQTq6otpEyO3x8O JLG+l9pWq6xuxbrzVsP1TlCEGuJrD3TJ Yzbyy5s4qwV/VtE3J90rQQKI3mIwIAdE PIzDR+6+7/8iuC84lzZ19A9vizDdsnon ODAChg/G9/FQwA4DoGC+BIbR2tbcbXgD 1hr72JP5th2DZR2TSBDvQuvb68saBpwa /FhStWrNCWL18ekTrCAADa2tt58ZVNQ4 9IiO4Ud4QkgFxN0NxzF3iFIO/iYk583D cpufur7bOBTweyjwCQnZXFTYuuN3wH+P 1+Ptj9SV/bNiGPtOzMQV1EorIJQTP9j6 Bt7sxgAKiAdh5GAQDMLp5l+OQnW+whAN LHJLrVH7xSw7YVui00BiHUuGi2AwLw+f y4PW5DJz/R3BzSttqyDNklU+EARGZ6aB sxPpptBICuLidPrV2Px+MZWjAZ1viDki xzeKkhNSWkqVC2aLYRACyWVKZNmWx4Df B4PDSfbOlruzu6DNklUz5CkzYRPnkCez TbCAC6rrP4lpsNn7zFbmflun/0tZ2t7Y ZtkyVPWNIqwyZBKNUUzTbhzVBmRuiK32 UfdFUqYbnDAPjDYxDa8Wi2EXeA3+/ntT f+E/UREAhmXjCDyy6dB0Bqagrp6Va6ur rrD62NzTgd7SO6GDrCqlqOsNqhkOJINN sIAB6Pl/qjDbjc0d8COTmhVZ1pU6ZQ9c WX3Q2l+K7qAIVXXhQ/8iRIAqeCNm4pSl H3v2AAormsbG0VrBnQPgJAerqVR/+6DK /PO6CBQGCxpIb0TS+c1g8AOLrvqxED4J CK4Hq4+Xhz+JDtsb4mDZgH6LpGmh63lt CnqVMmo2kasif/bthXjeNYE7b8qPlH0l QfNPsC+H5jWfiQbbHsk1IRSrNYKPppYV 9bKcVn/4553qTolFQ4ggBYG0/gOFATNE I0O63md2P5SFpJ7Or5VyCCSt1HK7+i6V BtstxHSAHfBvovXgfqn3stfNSTFZuejp mYJAxAINFwMe6sDIpnnh9y7L9rX8HpGJ 68oCYgae95tAXgLa+gs/5Y8JAGj1NtiO cnYQB54nWmimVMFcu4a/5HmPX+WXE62t ix8l8E4n/jG5QapaIhaPZTvzxEQ1lFyB gBj2/fvj5uPp8wABP9+cLZOQHuvSo0fz j57VHeW/0yPtfQ9hbh+l4qDvn7axvWb+ s5+PQLIWOEUpvKNq/baMRfUsviAL8sdH FjcWg9seHzat5+dDXtJ1qiWMWXF/jCLz nol0i6n3mxYzfVK9aHjFNStfh9nj8Z9Z t0AAC3zW3n5wWhiZTjWBNvPbKKb3btQU V+2Iwpu1Ts8QU42bPip3k8tD3zCrWvlo eMU0rh9bnG+qR8oaSkxNDHiIiy+GCVL5 4lnYP9HSf94Ff4AoINH2az61Dk9jhnQh 6zb7mWgjkXILSB50ACrbL763Bjz4Vnej y0bt1Fw9s7I8YrJfF63UHFWfFaprXt9/ H+Gxg2AL16qfY23tnx/oDfGVIzrOTPnM 7E4iJyC/Ix2bLpSLPQIhWnpEKXktSOLt w19TR/uBfH/mh/xai33B7XBJSaE3Z5cS EMO4CavDUcrm2ibMtWTjni7xR1sxndpO N1GapIdaL4W/mb655asODubD01UCFgbu iQ2BAiAKQcayK1obG/o6YOer73+aeeh+ vSUMhGAEhhJRCQfLpvHxUffIS70/hHly jyABuE9D5ZVvZcX/I/FAgRAM59eCWW2u /62k0+N6qn4qJpOq2bnwtxYBRArz53St 7YW4WoqYbGowP96RFLBxFsDQjxbLSfIA YLIWIzJAKxAkr8TwLdbIbieajieeB24f 3ma+SxOjRnJ5qrE6vHiUUFyMzIIDMjA3 8gUF1bW/uChmnb5s2r4+bWO3c+37Zgwd 3XREJQizuc2ZSUlIRAGHA3OGKypOGfOg Nn/uS+rlk2C7fZQt4M7xUWjVkfYRtDg4 EwLHnAD0E7dz7fFvDo1ygI+5FILe5wZm /szRN+tADAGIQfNQCIA8GV/diPHgDEgK DUH08LABAVwsenDQDohqBJ62VKcbtALE 3R1V2j+xocBfUUSV7tbZ9Wd8BAOgNgtA MYbZ0BMNoBjLbOABjtAEZbZwCMdgCjrd MeQEQq3FKykLTDdX1t/cBhVE9RNDBpYo SDU2oBHpHf17ZY69Bk988VPm1MSD0QYJ pJcmWqn97CWzOCE3r3DxcCWJA5snOScF l8BLSusGjMA8Pl/LR/BM4AAI6OdhAxJa gfTvf/B8hHQyb0q61EAAAAAElFTkSuQm CC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_IMAGE_CLASSIFICATION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(45);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_IMAGE_CLASSIFICATION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_mobilenet'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_name</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_class">
// // //                 <field name="attr">name</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };


// // // Blockly.Blocks['aidude_mobilenet_custom'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAAEAAAABACAYAAACqaX HeAAAABHNCSVQICAgIfAhkiAAAAAlwSF lzAAABuwAAAbsBOuzj4gAAABl0RVh0U2 9mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5 vuPBoAAAm+SURBVHic7Zp7cFTVHcc/59 7dZLN5LkEDJWLklRJxkBSKFa0PRGfQsW g12mKttI5O0VGrZTo6KjKdsTPK21pROy o42jHFRAEZAxYf6BQ0GHwEkEgSIoYQsm ye+95z+kde+8ju3mQ3iSN8/zvnnt/v/u 7n3Hvu7/zuFUopRkuLFj10jjD5rgNxCa ifgBgPYhyoFKAJpZoQ2nGB/EIofVtZ2d oqleSAxUgDuG7xUpvZbb4PwQ3AzEEZCx pRbFOaWvdW6foDyYhnxABcc/uy9DSX73 6h1DIgJ0F3EniVgPZEefma+kQcjQiAG2 ++70aF+CeKvJjB6DopmVZ0kwl3WyfS54 vn2otglVkcf6y0tDQwlNiGFYAQQiy66b 7lKB4HRPhxa04W+RdOZ2Lx+YwtyMdsy6 LNZMIuFS1SgVJYupx4axs4ubuSlj1VUc 6kKgjot5aXr2kddIzDBaCk5J4MvzJtUo obwo/lFuQz59ZrOefC6SAiuPSpXSmapO K7gEIBGT4fXTt2U1u6HaQMH16jI6/fvP mZQ4OJc1gAlJSU6D45vgKYH9xvtWXxiz t+zaS5M2NeeLhalaLaL3H1hGrx+2nb+C aNH+wNGymaAxpztpSubTDqWxystu/RoM BwNAZUtvWdzL2fVVqD+86aPJGrl92J1Z Y9JJ9+4Bu/5LjspqAB+ieVHN7wevjQqo DXfcmWLc87jfg1CZibzHug8vMq9n5WGd I36eJZXL50MbrZPGS/JuB8k8ZYqTjglw QAOW82Mwry+fqRlcGPxCw9xfIycIsRv9 qQIxpA9lMOyre+E9I3fvpkrrj3dwldfL DyNEGRqT/srgnjKHpkafiwkkU333+nEX 9JBfDervcJBPrfRhljbVz14B/QdD2Zpy FPExTo/WuIq3ASBb+5PmSMpnhiyZIlln i+TOEdUiq2vfsura1tgwrK4/FwpK6+v0 MI5j9wB5asjEH5MarJuoZDStp6FnHTws vJ+nQ/7Ue61z8FE1rbs+8BVsXyIw5V20 OWgI6OTv6+ajVSJrYyTLroQub/eUlCPu KpVSkqff2vw/QTLXz9lyeDh9jNmr+gtP TZzmg+Iu6AzMwMHn7oQTq6otpEyO3x8O JLG+l9pWq6xuxbrzVsP1TlCEGuJrD3TJ Yzbyy5s4qwV/VtE3J90rQQKI3mIwIAdE PIzDR+6+7/8iuC84lzZ19A9vizDdsnon ODAChg/G9/FQwA4DoGC+BIbR2tbcbXgD 1hr72JP5th2DZR2TSBDvQuvb68saBpwa /FhStWrNCWL18ekTrCAADa2tt58ZVNQ4 9IiO4Ud4QkgFxN0NxzF3iFIO/iYk583D cpufur7bOBTweyjwCQnZXFTYuuN3wH+P 1+Ptj9SV/bNiGPtOzMQV1EorIJQTP9j6 Bt7sxgAKiAdh5GAQDMLp5l+OQnW+whAN LHJLrVH7xSw7YVui00BiHUuGi2AwLw+f y4PW5DJz/R3BzSttqyDNklU+EARGZ6aB sxPpptBICuLidPrV2Px+MZWjAZ1viDki xzeKkhNSWkqVC2aLYRACyWVKZNmWx4Df B4PDSfbOlruzu6DNklUz5CkzYRPnkCez TbCAC6rrP4lpsNn7zFbmflun/0tZ2t7Y ZtkyVPWNIqwyZBKNUUzTbhzVBmRuiK32 UfdFUqYbnDAPjDYxDa8Wi2EXeA3+/ntT f+E/UREAhmXjCDyy6dB0Bqagrp6Va6ur rrD62NzTgd7SO6GDrCqlqOsNqhkOJINN sIAB6Pl/qjDbjc0d8COTmhVZ1pU6ZQ9c WX3Q2l+K7qAIVXXhQ/8iRIAqeCNm4pSl H3v2AAormsbG0VrBnQPgJAerqVR/+6DK /PO6CBQGCxpIb0TS+c1g8AOLrvqxED4J CK4Hq4+Xhz+JDtsb4mDZgH6LpGmh63lt CnqVMmo2kasif/bthXjeNYE7b8qPlH0l QfNPsC+H5jWfiQbbHsk1IRSrNYKPppYV 9bKcVn/4553qTolFQ4ggBYG0/gOFATNE I0O63md2P5SFpJ7Or5VyCCSt1HK7+i6V BtstxHSAHfBvovXgfqn3stfNSTFZuejp mYJAxAINFwMe6sDIpnnh9y7L9rX8HpGJ 68oCYgae95tAXgLa+gs/5Y8JAGj1NtiO cnYQB54nWmimVMFcu4a/5HmPX+WXE62t ix8l8E4n/jG5QapaIhaPZTvzxEQ1lFyB gBj2/fvj5uPp8wABP9+cLZOQHuvSo0fz j57VHeW/0yPtfQ9hbh+l4qDvn7axvWb+ s5+PQLIWOEUpvKNq/baMRfUsviAL8sdH FjcWg9seHzat5+dDXtJ1qiWMWXF/jCLz nol0i6n3mxYzfVK9aHjFNStfh9nj8Z9Z t0AAC3zW3n5wWhiZTjWBNvPbKKb3btQU V+2Iwpu1Ts8QU42bPip3k8tD3zCrWvlo eMU0rh9bnG+qR8oaSkxNDHiIiy+GCVL5 4lnYP9HSf94Ff4AoINH2az61Dk9jhnQh 6zb7mWgjkXILSB50ACrbL763Bjz4Vnej y0bt1Fw9s7I8YrJfF63UHFWfFaprXt9/ H+Gxg2AL16qfY23tnx/oDfGVIzrOTPnM 7E4iJyC/Ix2bLpSLPQIhWnpEKXktSOLt w19TR/uBfH/mh/xai33B7XBJSaE3Z5cS EMO4CavDUcrm2ibMtWTjni7xR1sxndpO N1GapIdaL4W/mb655asODubD01UCFgbu iQ2BAiAKQcayK1obG/o6YOer73+aeeh+ vSUMhGAEhhJRCQfLpvHxUffIS70/hHly jyABuE9D5ZVvZcX/I/FAgRAM59eCWW2u /62k0+N6qn4qJpOq2bnwtxYBRArz53St 7YW4WoqYbGowP96RFLBxFsDQjxbLSfIA YLIWIzJAKxAkr8TwLdbIbieajieeB24f 3ma+SxOjRnJ5qrE6vHiUUFyMzIIDMjA3 8gUF1bW/uChmnb5s2r4+bWO3c+37Zgwd 3XREJQizuc2ZSUlIRAGHA3OGKypOGfOg Nn/uS+rlk2C7fZQt4M7xUWjVkfYRtDg4 EwLHnAD0E7dz7fFvDo1ygI+5FILe5wZm /szRN+tADAGIQfNQCIA8GV/diPHgDEgK DUH08LABAVwsenDQDohqBJ62VKcbtALE 3R1V2j+xocBfUUSV7tbZ9Wd8BAOgNgtA MYbZ0BMNoBjLbOABjtAEZbZwCMdgCjrd MeQEQq3FKykLTDdX1t/cBhVE9RNDBpYo SDU2oBHpHf17ZY69Bk988VPm1MSD0QYJ pJcmWqn97CWzOCE3r3DxcCWJA5snOScF l8BLSusGjMA8Pl/LR/BM4AAI6OdhAxJa gfTvf/B8hHQyb0q61EAAAAAElFTkSuQm CC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_IMAGE_CLASSIFICATION_CUS);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(45);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_IMAGE_CLASSIFICATION_CUS_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_mobilenet_custom'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_name</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_class">
// // //                 <field name="attr">name</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }

// // // };

// // // Blockly.Blocks['aidude_face_detection'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAAEAAAABACAYAAACqaX HeAAAABHNCSVQICAgIfAhkiAAAAAlwSF lzAAAB2AAAAdgB+lymcgAAABl0RVh0U2 9mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5 vuPBoAAAp7SURBVHiczZt7cFTlFcB/59 vdkIQkJAEKScAm4U14CElQHm2hFix2xl crYx2VoLwEio5WHAsJK7Q+EgqiAZyWDs 50alucPp3WDqMOatVRoSIPKxQCA8jDQo BsXpvde0//SJCQ3ST37i7Q31879zvn3P Od/e6933e+8wkdGLQpMEphrq18R5B80J 4dZTrBAvaALj28KONdhzquKKgOfBPDC8 AowONMSxoUPWKENwQ2H3oofe9lrRd/FG 3VpMaz9etQFgImDj/PWViDji7KPBeHjQ gGbL6Q7Wsxh4DMOMxYKJtS+6Y9tm+WtE BbR4u2alLDmfrXURYRX+cBsjzqLY3TRg TekKeU+DoP4EFY0ni2/u9FWzUJ2jrbeL Z+ncC343WyDRWPdThBtr7CWPZhQBNiTL mp8Uz9GgAZtCkwylZ24fiZ6tq0KKtqFq f7E2ArgsKNgacUymn36MaB5bEZK4WbAs +r8nBEs7BHYbMoJ51YE8XCY++pWdjrP9 Ha/X6/ORpOGaJGrrfVDBOxs7ElG5FkUE uFc2JzEiNHULOr4fMBn7366iyro53Cly 4MwTKjVZz9YSrkiDKP1hdnhzZdJ4UbA/ sURkZ0PjltwpE50uzkJl0xx185Xi3mAX eA9HOh2gC8Jchfg6HQH1559smYX6r5Wz RZmuo/JjIIe6VgYyAApHVoWHp4UfqLsd 4QoMxf2R9LNgB3EP+QbUT5rYX981//9I l/x2Igf0P9wyL6fIfLAUNk5wFOxXKTi5 SVrx2NxS7gThLzvKYiPGjE7J5dXvnLOU 8+3detARE9EeVyeryfvAjm+9f0AesfLo e7IwS8gsxVr2/vnIqq2xJhM6EB8Pv93p awPgvkJtJuFL6myp/KKqr8oHGNMG/8vq jMrlhziyjzDlvcJBL1kboSCMrKsvKqfi +v1kUgMc0R4gpAmb/yerHWbFRlYqtH1w JZOKe86sstq1kZi3bMj0BZReVdWPKB0t r5a4kiK8pWVH43Ft2YAjC7ovL7qPwOSI 5F/wpgEPnFfT+ucrpybafokvtWPDdCVL bEonuFGehJ5lG3Sq474RFTBaS71bsqCA /P9/tT3ai4CsADy58rAb7nyqmrS+8Wq+ etbhQMrZmcyxCNvAZge+TeGB27akjr1D vyevQ+WQbY0+Gi4rE7XmszIjPcONM/TY +l+qhzoxMvin4r6uRIdS+R+YTdBnQpcH Gl1bqej7Kkne9f00dhhBtnCjLt0/eMCf 7LjU78SL8yf1XENLxmScYBgdVcCkKtEf 2RObwo491Qkj0YlZvF2MM6S2a0WCbHrS uleeH6SXmh8b2S9b9OdQqy7Kj5BDdIyF MY7XrNovSVYuxhqNxsYQ0+9FDGe16A43 N71QLbujSqVl83s26PEB7b3xomSMayyU 3vL38ztdsVnAj2sonNwcWvp1q2xp6hsj 12VmdtbaP7qyA7/grYRjs1Go2Zg0IfGj QHIDdNJ902vOWf3emoYpJ9Onx+STCutL qxJcWxrFNBcSGblWKfvnNU6LIs0+3DQu OH9LG6TWaocv6G3PCUor7hvd3JdmrD2I 7HasJncyk+DTx9U/MZ0YgRk/rk5OacYb 3tLoPQEOYLwPvopGB27xTbUT4yHhIagI xkPbtmetORZI8WRWsXyHxiSlPO2H727s 5sfH7Ge67Nsdxnpjc1ZKXYpxPpY0cSFo Ax/cK7185oDKb6dHRXcgKZj9zYNHJBcf N2j4dQx/bX9vsGXvztEwZXTW+yRvS19y XKz47EnRDpk6onFpcGD+VnWpNxHlDvjQ OsqcW5DTV/3p90cttBX2nYJgng6AUz6E Kz7OyVrMUAHiF32aSm/l8EzHuvH/QlnW kwaak+DXoMNoCiUh80l61Kw+qJCGynjj gV7MiQLOvzsnEtZ3PT7QnEmALzGQrvGt FS+IMRLeePB+Sjvae99v5a0+tvB5Ja7h kTVC7lWExeuj157rigQ8viK3co6SoAIq rFOfYnPyxqsbJT7RISlAQSyByYrlMGpo eYmQiDLnAcgPvHhoNTBrYc8RnGX0mHrj aOAzDt66EeQMEV9OWa4PwrIISvoB+JxY WvzgOg2hCTM9cCcb4EdzMCruq6Pi4sDT gVdROAozE5cy3wJDku0HD1GdMd/jr+Xx Oil7ggJX7HpTRup8KfupS/+gi73Ii7C4 Dyjiv5a4HNdjfi7gJgeNOV/LXAGFc+ug vAeLYDX7jSubqc4NDw990oGIC86rre+Z vqby6srhvalbCI30bYGotnIfvKyHbgFZ kVWVjVnsLquqEFG+pnDNh8IRtA2spP/0 JrEaIKrK5ZlN7pVrPu8F9Ha1IxyYlH55 uFtR8kczwgFOdYPHB9kBRfdNmmsLDlkx 7sOGnIS1cem9hMZrLjbf9mbO9QmbDiWG cCBRsDq4HltH79zonqraat9vbiZ0MUyg tfujCkMyNS4j+K8rJTr7bV+DhWZ1AVdp zwsuqdVHad8mC365etsOuUh1Vvp/DxCQ +qwvE6w7aaTiIV1TE2ddX5ttF9sfMAWS rygpfI0jHBMqNplzqOcrOfAffjYHu8R4 fk9ql6Yf2HyaT6lNz01iicCAiNocgpSQ /j+N9vwMuzXUqIjCJy3jPGEKVCtLsixL ZR8JwTz2YMCjGkd+Rj2RgSDtYaDtaaqJ 0fnG0xY5DDxI6ySsb6v+xSJHqfPLHnBD OznwH2dyeW4lWWTWxman4YcTDvFIGp+S GemNTc6buiA7uRnHWOJKMQcwBkyNIgtl kAdPvO9npg9tgg/qlN3JAXjtqxFB/ckB fGP7WJ2WNb8DrbFwoh5gEpWeA4BxjhW6 yKADKh4m3d6V+DssyJ/HUZNgtLgoTtIK cbDLWNggr0TlH69bTxuv87KqS4YqdrrX bEXyaXTDnNTENxfEbAayAv3SYvvmXVWx RTGZcFErAvIEX+FtR3G3A8XlsuOIxJul vEH/uUqY2EbIxIyfKTiLkdcJyIiINa1D NTxv/E8ZZ7VyRsZ0iKK3YiZhpwNlE2o1 CLMlNKy7v9+jgloXuDUlyxEzXTuTILpm OIZ4qU+j9KpNGE7w5LacUneBiF8vuEGV X+iJU0TorLYzor0BVeWp/by97HKrguh2 mPjPOfB+7WnU+9hmoF0OUqswsOAiul1P 9KPP4AKJInkWeu6oxAxAJClHn5WzTuMl gpXvkbakaORLiP1hIcJ0dwgsBbiNxLzc jhUhJ/5wes1RTQuVGajkrhxsA6hUeiNO 5Vlc2dnLSIQBQL1b01SzIOdCajn1b1JN wwDZXRoANpXYW2IJzGllMIB/Clbpexj3 e6B1FYXTcUkVGOD02p5CI6TyBKzYKulc HVgSLL8CmJOjbXTT4hHjqs5+PFsgxjBK BgQ+BFhCUJMAqgYuxhnR2fi5XC6rqhau RzErUjLayveSj9EQOQ2jftMSRhCU9Ry5 PwTVQVk0/izmS8kWXSHoe2z+C+WdKS2j vtFuBFotQOu6TWkvDHcdqIINTD2sGlit ZYCYuwPtuTdsvOBRKCKBEdXB0oCnv0QV GZDuQT/VhdNCxgt6gurVmc0W1NYCwUbK z7Bsh6YAzO31n1wBHQbZaRXx1dmP5Z+8 b/AVJTi2NEHI0nAAAAAElFTkSuQmCC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_FACE_DETECTION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(255);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_FACE_DETECTION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   // custom xmlToolbox
// // //     xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_face_detection'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_id</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_object">
// // //                 <field name="attr">class id</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_face_recognition'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAAEAAAABACAYAAACqaX HeAAAABHNCSVQICAgIfAhkiAAAAAlwSF lzAAAB2AAAAdgB+lymcgAAABl0RVh0U2 9mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5 vuPBoAAAloSURBVHic5Zt7cJTlFcZ/59 1dAoRbABEoN0GwdKwEkyABMoqtWMhtN5 o6LaighaotdaR4YQD5iq1KjTrq2E5rVb xRRUk2F4jWy4Ci2BFUrFbpKCAqClYgQk KW7H6nfyShye4m++Wyu3T6zOSPPd95n3 PeZ77vvZz3jfA/gPwNRVm2K3SR2OY8RC cCg4E0oBaoEZVdiO5U0VeOHU57cfOCtf VOuSVeSXcVs16Yleqp671Q4FpggtN2Aj U2PGVcoZLKgso9DvxPMSiS6/fOFSgBTu 8CU1BVHnC5QqsqCiuOtuV0SgmQW5WbJg 2eRwBvN9Luto192abCiu3RHp4yAhSUFw xX2zyv8P040AcQnVflLX8u/MEpIUBBec HwkG1eFxgTxzBBUbm0sqisvKUx6QIUry /uddzTsA2YlIBwxxVyNvr8O5oNJgFB20 WdO3gviek8QC8DzxSvL+7TbEiqAPmlvh kiuiiRMRXG1bmDq5p/J1UAFb2bJHyGRv T6ORuKRkMSBcgtL5gJTOlm2s9FJedE77 o+CkvbclLwGFfoRkjiIJjnL3wSlbndxS dQY6vM2FhU9v7JGGXeN4DsNpocPnZkwP CkvAEZf1rkQaWwGylPKFzSsvNNcLXTJi 2137c/SIoAQ08/kAX0ienoDCrwsyqf/+ WWxjx/4WXE+MTE2BcmRQCxzeRupLu10u d/oqUhr8w7BZVHHLRNT44AomfGcNmsKl cLPACE2nJSeLjK5/9tS9ucUt8EYBPQ20 Eq490OnCJwxfI1U4yYixEygLOAgcAg4A RQD3wt8IEK748xtZZlWXYYRVpb3Ap77Z TAj6rnVAcA8v2Fb6rK40R+zy/UDjhyTU uDr9Q3JCi6SRtzcYKBHRBAZf6td89DdS Uwvg2nXk1/aQoTUHzAaqCVACqagkafgI zoRxubOg9Q6S1fl+8vJEyEd42xizfP3B xs9suvzO8dDGqFwjjnfSLF0Sdw1U1r+s 5fWVKF6uO03fmo2E+fAeE2Valty19Vcg rKC1p9IpXe8nUCl9P4Oewzxs5tuccvXl /ssoOudQrndSQ34FhMASzLMnaKbADmdJ AcgBNBO/J1F/2qnSaptm1e8pZ5x7Q0Vv r8f0V0rqrkVhRW7G/5rN7TcK9Ax6dV0a 9iCrDHTl0AclGHyZtg1ERUdYzKrhjNRg dhc7gIVd7yZ8Ln+rxS3xKFxZ1KTuWjqG PAFctuHyRu99WIFIvSpSnLFnsysLWlTY y9Te2Y2o8OwpbZZd4Lq33+T6I55PkLL0 X1ri6kty0sC5X5K0uuM27Px4KsESWT9l dTDiBZ4ZaKwoqPgZgFS2CUC17Or8g/I/ xBwYai6cATdGE/Y8PfTja2LMs9f0XJQ6 APAhEDV6chTItmVtF1DhlGa8i1ZXaZ9+ ToPrvMO842dikqPbuQ2YebfP53TwqwN5 S6BuHqLhC2hXFXrizJCDdqyPWQQINDjp Eu0a35/sIb8kp9S1zwBjCkS1mpPAhNr8 +CW0suBm7oEmF7EDti17fpktJPVeUxxx wqQ1XlHhprCF3rPHx+rKb/w9AkgKreRh y3xqIyd5FlRSxNPbAcOByvuG1BVZY0nx 6ZBcvvngZEDFTdjCEngqm/CDeWFZUdFL gmWoN4QWH9xqKyZ5t/G3XZs5w27t9Tv+ 50YOGmq25a0zfcXunzrwfu6yxvRyDwDz slsLClzaCc75TgmszAP3t7+LaTwQfbPV 13RHuWuTN9icCTneHtQPxP1B2cXT2nul X+RmGEU5Ix/UODF2UG3nbiO6yv/WmEUf W6K1f8PuKNsyzLztiZfqWq3Os0l45AYb sYe3pVftUX4c+MNB41x8SIfrqnp5vvTR oSzB7V394dy3/p1PoDPVzUhZlFRB69Yv k93wn3tyzL3lhUtkTgMuCQk5wcwEb0fj slMKOisOJANAcD9HfCtCgj8AWNM0XK8p z6oMfQ7hl8ag8dsDS7LtqB5HCR0PM/ve WOqDWBSp9/fajB812BP9NYX+gsttqi06 q85ddXt9heh8PgYPqbNjL41sh+oenNv3 u4dIJ1wfEdIoQXOk6iPihHxw/SnOxRoQ gRRDi7h8dduejmO6OKX/3jZ7+u9Pl/Lu 7QeIHbBKLuBSJ4oUbgMdvY51f5/DmbvO V/j9lm/sq7tD2HswbZH948/fgIESJG8L 015rXVW3rOUJUIEW/Irt9yzpDQ+apSY2 3p+c2+GjM2SvgPcDXkrbWW7Y2VaO6GS8 aK2Nlq7IlG5TSENLXlmIjWqMouUXn36M BD21sWSZygXQGyR4W2L0w/PkFE+rXlc6 hO3lr9aq8zagLSaizJGB5855dZgckAqh z43Wu9jnxy2JwVheIgIvPWrl76YkcS7y 5EFaCXR48uzgq8PfG0UA4OdlsKB596z7 P7lb09pqg2+otgP5RX+7nLMKrJrfb1z9 xvPf1+SvqxExGbLVVlbUMw+Ot1dy5L6M qwlQB9e+ihy9NPvJc5NHiOCAM7StZgs3 vHfve+rftcg//1jfvMmWcE3/nJ2YHwkx kNKV8aiVK1VTkqwn2gf5RMK3wGiQvcAE P76GcL0gN7JgwKZQIXdJbMYxg7dURw7N QRQSAA0Y+9xSUMj0ogOgAoAdkHPBvVp5 vhvv2H9W8MSw1NAUbGgd9JbT6pcA9LDU UtWPy/wAAdmjYSA3VaKOkyDI23LU8tGG nzXl+3hyIJBYmYsDVhORnU2TIzseiZsJ wMhg8TFcwh9kvmLTWJCmZQtiUqmENsje 3SfTC43VuAdjdECYXIq4kMZyR9xRcoby YyaDuwcbn8iQzYvNFxekoTXwivSfqKiL JVPNEoQI/UR4F/JzJwVNiyJtEhG7euk2 6spfE+TvKgbJOsVdWJDvvfvb6L+0nmW2 BYkZywTZDJ1hFgWTKSQHhaMqxXkhG6db Ung0eSsC6oQT1LEhzzJFoJIGLZwDzgWM IyUFksmcu/TFi8METU+yTL2g3cnKD4z0 nWqidiu8UPUQuekmn9AfhLnGPvwsXC2G 7xRdsV36MsJn7r8m8Q8poG3qSi3VMh3X lXKg21lcDMbox5GMMsOdeK+n98iUa7NX +ZdGMtvSgAumt9vhvb5JwqnQeH12JUEX b85legdwKdvZm1jiDXylSrU/cL4oUO3Q vSndYQGlgCXI9zIV7HyCo5d9XLsV0Tj0 5djNL37kgjELgYwxxsJiIMo/HmVg1wEO FTlJcQV7VkrDzVKk6t8B9tZjFiJZcYCw AAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_FACE_REC);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(330);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_FACE_REC_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_face_recognition'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">face_id</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_face">
// // //                 <field name="attr">id</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_facemask_detection'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARSSURBVEiJtZVbbFRVFIa/tc/p3DozvY3Ulgql0AI1BUECFRpiUJFgtJHkSKmiSdEGNeHFBh9MDPpgiCa+2fhQkJeiqNGAgkETExJFTRVCpY2ABKgUKB2GmellZtozZ/sw9EanEE1YT3uftfb//2utvdeBe2xytwDLslxKeTahdT2ahQg5Gq4qOJ7Wau/nTxyah5btaB4Ewog+hml+KNvCA3cl2Lz5+fVoaQXmZ/OvK/lHv7KoU2Q6yp+MSJ3siMTVTOAN1tZmtByZCTw3Z5QXq7qmgNti8F1wCbYYNeTQApCVYIv1wgYtuhUw4vE46bQzLWZh8CYeIw2AI4ItBo0Vr7KxqoVu8gBnA4B5+0HLslyO4iM0BoDHdEin4uAOYhgTejyGDcDOsgaO5NVQlezj64IVvHd2D+XxixAIerJmIOJ6Dk1FZqcpyFW8UT+bEn8CVzqGaUfRqZv0xDLaNkU7uOQKjYO/fvkb/H4/wMmsGSjkaX1rPTpqUznXx5rF+axZnD8e42i4Hk1hx8LUDp7nWPe7nHVy2Xjjd/wBP0pUCs0HWQm0pnLsbuWrCKsL+xk8/RvKk4+nrBaA5OVf8SejjOR4MLzFLE/08pDjIIEAItKLSJNsj5zOSoDogpGRUZSTpKLMS93qWpTLT3o4jJhuANz3L8XwhXBGBnGcUU5csDne1UNSm31vLvphvuwgNVGRLOY4Ds/WzuKtxsVoO8FA536Urwgx3YjpRnkLGejcj7YTGL4QwxLkl/7ZnAzPSkwGn0bQ0LB1FUiJx+OhNOTJJJTjwywoR8SYSFIZmPnliMufEcRY16TEshpXZiVobm7OcRz9JeAGiA1l7r5yB3HPXUuHt4jdoWp2h6rp8IZwl69F3SKIDo6/E7dS6lPLssbVjPdg4EaqSgzKxvanrtlE8ys46i/he1eICDkTsoLVFDLK+pEwTw5e5cK1PyZ8mgqlfOXA+SkEQ6NGj9dIDwG5AGcuJfgqUElnoAj6whDvn9KnSNDPZ8Vz6ZQANT0/TXbFvV7pnVaiQ4f2DojWzUASwHE0D7cdptBOQXEIzIkeYBpQHKLITrGq7dvMw8hYTEPTvn37kmMfps3BxsbGgnRaFuBIG8ISb+V9dL68kRPefBgrtYLliShL2o6QONcPcArhJdPUF9rb2+OT8WYc15bVuFKJOgyERImzbtuCwa7S0qCgqb5yNf7jnr/92tEK6Ef0UwcOtHdkw7nj/6Cp6ZnAnOpH32lacLnogZBZjz2cB4DhjfZE7IOfnCmJXL/Y8XZr6xeDM2HMSKCPtuTiMw6+dvqRZS3zuworfFMy5+Kwn93nl0Y+rvn5BB5vvazYNZwNZ/qoGLNcYxfwWF3h9eT7V+rOLsuL9E12n4wVFNcVnJsDPE5yeBew878RwBaAUp99ozs2r6q7f17V7QENRd29wGyg4X8Q6JsgqYR4/9KILVqnp3hFjIR4u4AUyNAdhN5b+xcLPYieY7p/TwAAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_FACEMASK_DETECTION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(180);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_FACEMASK_DETECTION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   // custom xmlToolbox
// // //     xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_facemask_detection'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_id</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_object">
// // //                 <field name="attr">class id</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_hand_detection'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALtSURBVEiJnZVNaFxVFMd/594374UmtRWh0kUXWiqTaKXaBkkXQhctfi38YOpG1yKVEtAkuBAGaTchIBVEcGEXals6Ni7EguCiGw2KEbNo2mghBLQodFWnvszLe+e4yMz0ZSYzefVs3j33/M/9nfvx7hUK2u8fPhvp6tDXBqMmnBieqJ0rkueKArJ4+2GDo8BOMd4umhds1mkXK35phbMYhw2ZGp68eEm8DpjKehwGAJZmXimruksCsbfsxX1Ts38UmsHSsj6B8TqwV7DpXtWZ+nGBEeCgin8N4NdTL7z043vPjPUFQOlmznl48YOXd/dAjLZaCn9dn668GZaiWc2y7+erzx3vCShPXbgJrLR8SdxYp+ZqtRICj7U1or9gjDtxOO9Elaf7zADMZO5uMl0AN8R+IGy6q5jfjvCIqpKqkqp81Bcgjrmc1wVAOdguBhYEXgVoJAmBc3+PnfrmWl8Amv2Q8w6RuWhDAciT7dnAAtjxFsB5dz4X29zqOx9YAP5tupHCgY0KawMMdhk8mGYZqpnViU9vCTj0xidrZvzcrlisvUwCJWB/Tj7cqt57f+NI9cqtLQEA4iy3DzyVaz9E82dr2l6AZC3BBf7j/Bh9Aab8lHN35NqdN0Cgqqgq8ap9TqfQqlW3NLj4FqZ7TGR2eKI2B2Be50V9vxruFtP8ZlFs+f4A4LdtVysYZ0AQ451r05VFzD5NkuRWoxFT8gFRFOFECsG6AGnGvPMsNu8VBEYQmYmCiNCHrKUp9Tt1ojAiCsP+I3aYA3j03dqNOzvuPwCMI9TzAhEhLJW4b3CINF0jzbJ7B8D6sSxP1s4AjwOXu5QiDG4bJPDF9qQL0LLyRG25PFl7HqMC/Fl0IFND1vd6wwr0PKblqdqXfiAcQfisCCBuxJSC8Lsj1SurhQAA+05+cVvgq36aTJV/6vWGCDOj718+1hnf9Mm8F2s0Ghi6PFr9dmKzeOFH///aloDM3AoQ94xrloi4673i/wGmAQ1INRUIkgAAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_HAND_DETECTION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(240);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_HAND_DETECTION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   // custom xmlToolbox
// // //     xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_hand_detection'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_id</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_object">
// // //                 <field name="attr">class id</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_garbage_classification'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQPSURBVEiJjZVbbJRFFMd/Mzvz7aUX2u2WthRBLkIkXLTcxAgRH0CDkWCCipGEgAqaSJBHiDwYniQ8qPHBGCGoDwqBGhMCRIkpESSGWyAEKVVKaDDQ7ZZt2cu3+30zPpQutN2vcJJJJvP/n/OfMzPnTIhRbPXq/aE5S5Z2TXtmubly7sjp0bhBJgYnX3fObVI+Ky2MGVyzvlYdf83eaeJuV7Qhc2lwXfrC08r7eXtL657HEviuY/bYIuFLYMcOJ9zN13AjNamsYyKW/PyTea1bRhOQAAXrLC8XfDSzQNaLrnkUTwEUfF2HkWUJrqvw8rYslvdl7FECYsOhTTNNUZzzPaHLEQpZl0yyLzBARX3l6R/f3bsoCJdSckQotIpYyg5HoCI6cBTvFZ5bd/D9t4MEVDTuqYce0wgrVoSQqiYQB3B08P0pYcV5IcwSIU1FOYIvFEKGgqML64eUdz4QBvi2Y8EqMIfKEYKeKUCVc+/Gui8XvRCSoWfv9WcWaK1+e/rA1rYRAnv/bVlsjDwxPIAUYSZXbuef3rtcuPP7EKwyo1nxR3Nf083aKkAkk2mwFq1USkWct2Yd2PIr3H+m1tc9CH/EDkPCoT7SQt24BqaMmc/Ba5+VsFePT6bxTqx6uE/R8+Imaw4DDtwvND9ET7kjKJp+jt5cS3fmb+oqptLSsOxBdqbsqQFgQFqsLAmYlJdioDgBqA8vZNm444yPrcBiyXr9AMxtfI0Xnxgo3sMvdZKrcFMAuaxLPpsdEJbCCzuRNQJhSgIb550tAv0AMdXM/MRuHFnNnPgOEpEZNMSmACCEQ310AgDpapdjr1zZd6bS6Wx3BKeqIxytjZizY2MfzG7dcqCUaSkvMXBMrknR3r8HsNzOnaCv0MVPVz8lV0zS53ZxsH0XAONTCTi5+MNjEfvkL40x2qIOJz1fnvDMN2c27ts9GFaVBCxJYJJvcnT07aHWmUVNeCbVTiOul+X7y9tK1HimilUXnsfROtzl36JGKHwnS3fRY5t0iOazW69v/uHipC/e2fdwhxty0RdTO8l73Swd9xUrn/p4yCUuuD6dsKfJWJ9e47FQVfGy0hhjuQpgLTbn7hqWge1BPGgZrunhVPd66py13Ew7pfWQkUy/PR6AsJDMUTEmyDDNRtIU0TTb+zFct/7aR/tnlATSxXjIK4aoDPcTVi4AxnpcS7cOqeTmdB3aH2gdGsHrTgIAXwh22AcbAdBefpMC2Nz23hudSfsmCKSwTE20E9VZytmEnsf/l6zvL5MAVrDeL0jR95/G9wW9uXigU1M6GBthnj9RAggrbkhtCVf7CAlauoE+rio8voAU+QGBotmhlP9ntNKjNtZLoqJs5wCgbdplbo1JYQXl/9FBUzononrD/610h4vV2IMEAAAAAElFTkSuQmCC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_GARBAGE_CLASSIFICATION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(0);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_GARBAGE_CLASSIFICATION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_garbage_classification'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_name</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_class">
// // //                 <field name="attr">name</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_cat_face_detection'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS1SURBVEiJnZVLbFRVGMd/5z7m9t55tqVQLFMEKgUpYEHLQqMJiZiYYEy0sEGTEkJcGCPERECMN4ZIggILIlESBB+gUnWDCzUgIS4EQ2IKhCKQ1gK1LYXOtGVe9zHHxUwn0ymE6H917nfO+f2/8/jOFVSoc8fWD6Vgg5B0Ss/YvMa271aOKdcx2w4JLbdHCtql5MDa7TvfLu8X5R9f2XYkoOdGALXY3a0I2fHytp1n7wX/7oOtK/JSHAK5sBjyHdeoWWfbYxNjlPIJAStlFeCCgK4RtoyF4aB15vhH9mcAp2xbO2XbGsCPe+xPw0HrTNgyFuqaOpGrWmSUpFVmJRSBVRVAV1UUVaW6vh5F5jvOHt7d4TtZAP44vBstFEWiMDI4QFBVcH2fdMZBVvAmGah+0AqaCooiiNXPRGTHyd0ZmLI1npPFGymYxaJBMEIkBgcIW1WkMoFJK5i0RZrphBRFMD3eiJccws2mp8Ar5WZSuMkhpscbURSBZjqh+xoA1M1qJD1884HgSqWHbzJtVuOU+CSDGQ3Nc3LJof8Mn5CbHGJm44Km8phmb9xoPZpI5NZ0dvrRiLklkXD/t4HvucQs4y3gh2Pt7eql6mpDvL/hlT4gAvzasmDuC5EAmlUVuDdBFMtGVt6VgtJZhzFXuhe7e48DK4FRTcr8egVlrYRnL17u0QBMQ2d+4ww0VeHCtX6Wzp9FNGRixqYBkEkMM3o3Q9eVmyxuasDL+1zpu0Um5wLoSJYJ6MyT/1Z77+CRk8DJvvPnq6+e/n5kZDRFYiyNBHRNJWQZ6HqhsEPTG0oGmqYSDlahqQqunycSNJk9s4aaSJDlq19srZ7TmoSyOmhcvDg5+OcJqauqqDIC1IQtFEWwbEHhZqgBg9p5iwAY6e0mCLQ2xwvGlkQVEAmamOGwnIBDsb53dHTEpequj0aj7yTHxnWk5LHmONOiQQDM6jrmPrOa4eHbANTVTaPn9HEyiWEAkuMZznX3IYBILOQkk6mdqq8e3H7o0A0FIK962yTiXdfP35r7UC1ti2aX4Eakmvmr2kmOjnN07y6O7t1FcmycR1a1Y4RjAMTCJisWPczcWXX4PkMCud1X/a1QrIOYGXszoGRrN+/dH29Z0pKMBM3Szahf9ASaYTL8Tz+GaWKYJsP9/eiGyYyWttK4cLCKlqUtiU179s8OKNnaajO6qXQGb+zblwNyWw4I+s6ceNJJj3d5mZQGEI3PI5NO88s3XxKO1aAogp+//oKmxUuJxedx/feCgW6FvOD0hqeFEBIYnXQGlRq4dO7zoctdr7rpuyxpfw0Az3XRdH1K+3znJ+hWiNo5zR/HW596vZI15bmWtq0MpMZXzVn5EuR9pJQIIUpAoNSWUjL/+XX4Tpbxrt+ek1KK4gpKmvLY/d3W1Ja73V/vJoYQmo7jODiOg+d5+L6P7/t4nleKC1Uj3XOefN5r6vnpyOOVvCkGQmE5QKrnAtJzS5lOgCeMZPG5yA704o7eKcCkeLCBlLIOIO9kSfVerOyeJD9zl/T17rLs8jMevAKEOtHO3bqBMzJ4b7qUpK51IX3/nnPva5CHv4DSrHTPBfLFf3G5Mjev4o7dKQ/5xbmT9C/RouT3ELR2yAAAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_CAT_FACE_DETECTION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(225);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_CAT_FACE_DETECTION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   // custom xmlToolbox
// // //     xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_cat_face_detection'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_id</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_object">
// // //                 <field name="attr">class id</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_wake_word_detection'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,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", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_WAKE_WORD_DETECTION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(180);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_WAKE_WORD_DETECTION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_wake_word_detection'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">word</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_wake_word">
// // //                 <field name="attr">name</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_head_detection'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAR+SURBVFiFtZdLbFRlFMd/57t37kx5FJBSKChIWAg0RBsBRbA8AgQaEhY1JcQYdkaCRIx1YQIyBFdK0IVuZCEBNKFKIkTBEKPykMQKRMVHoEAgRaA0BVpK6Tzud1zQGZnHvTMNejY333n9/9893/keMq9hq5InBpl/9ODGo/n6h5Fpz62rF8uRfL078PWBKxmlGvrDkukeKvGZjaUmddPMFcNFN2Y/lbX8HRRj1PQr9nJmLPCogiMDf+Dy8YObHi81C93FTLVsBpYCHkDikslmxNMOU6HN0Q3sKZVr+rPrLgGTTClHAG3B8XeyXS2twIoMeK4TkJCx9rbZnXxXTmpLEZ8iUpKAxjHax16B17k/z5Li98nTyQtyUePZEgeKa5D5YTW3k4mL0lgOcE5cQiYkhvAt6IJidhHTZMXGQmeku5islr+AaJBPZg1ItBpN3MhDAXekXRR5je+D4kNLYH2aw8BzsKrrC5UKNiEfhMUFElBFRFhZFnjlVNyqRcXzJKVW48E4wX9gD+OACeUQcCetwYiHqZpXSCCNk3yEqYMnYBlXDripacBxq0EhMnENRIYXOqWYMXgCECsFbofMxKtp5P4mAKKCN+M9TMX4HD9xqAzKUbJPC8VBY7XYkSuww+pxuq7mWI26eNO2ku5rw792AO3+MzRbThvq/h1jwfkQqFPXxNLDRo1G/F405YEfAYmqM8KAk43xugK3/yxCT0dnZ19Xdw/CaTHeq+PejGf7Ne8PONuAFzImdWJQRilCRcGKOwYYgzJF/eQ9YE3GnL8GnnwosPIY1T04yieQDgv9rf0OrRduYwtuEGAVjl3o4VR7bwkCJgcjl4ByOCz0/UOXeGvvOZJpW2BLpi2vtLQRP3S5SOQDEKrfPDjOXQMdqU3UuNdRnsGYaiBne1s0fTQ3e5O4pvAIcR1hVV0VY4YXnsJuxD0FtKnITzWjOj960BZ4GKV+PDTHqjkROh3K6ALAHzL0ZXfJqh3FbGVdSP5PCT6McO79ZyhWegZNIJlMXS+mlxvncX4/iNzK3mFJnzlD38efkGr9uWguxzO/DprA0AUNHVB4y5W+WzgnP8c5vQ+sD+kUd3ce4O7XZ7GdnQV51Dg+CxrPDZqAiKigX+br7WNPoSPHY9p/IfJFM10vbSZ5/g5ulYu3eHFhIjfyh4gU9m0pAgC+o9uARI7SiZBe2oydWIck7qIJS/SJSkZsXYtEC1vQl+iGMAypb3inXg39x77a2FrMIXH88BbQt4tGWx+vsx3cSPEJeBU/uMtXLyxmq52zfrYVGzMWPaJWW4IYenNPbAH2FTUaJxBcI9ErTuzskqC8qrZFLEdK7gMicetd7V4lqtvJ3DxCA0C9ipPSG5kiC+OhZwuUuRFJU5PvPb/sDbE6E/QA+etiAFkj3nW/YtiLZvnqWdLUlCwr98DbMOdxKkaagtYEgB7fP7xfYrMcqxOcvu65Vkyba81nsqzxWlBM7Zz1s1VtttSZx2nmMHKASVmjDb+EyLyVd4DvBoa7w3wzYsXGRP/FyNTyH4bbk4P5gQR4AAAAAElFTkSuQmCC", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_HEAD_DETECTION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(180);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_HEAD_DETECTION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   // custom xmlToolbox
// // //     xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_head_detection'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_id</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_object">
// // //                 <field name="attr">class id</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_car_classification'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANZSURBVFiF7dRNaFxVFMDx/7nva2aSTNo0IZ9NWhrRElpaWhPpVJsSsJ0MlYrgyg8km6q4c1WkLQii6E6IuCi4yqYIak2bCmL6gTiFIFKxSoyZKLRNOybzZpL5ePPeu66iYBQ1U3Azv+29555zz70cqKurq/ufSS3BP42O9hla9yiRplCkCZFNaN0AFBHRovViCLOrsdjcwLlz3n0pYD6ZfEQpdWJB1JPfihF3wwDH93nKVHzoh7gacvE4DZ5HTCn2V0rsEKnYwiWBs72Tk59sqIBMKrUTrd+4Lsbx801xXK+KZdtks1keEjhpG7xc9gkaGtm8uZlczsVQCjefp0uEV21FmwjAlTAInt8+NZUBUP+UWA8Pmz+nUieXQ/3NO9Xw+ESsEc+w0AL5fB6tNf0iBEBRKZqb4xQKq0SjUfKFAgC3tOYjX68d+ZgyjJlfRkeH/rYDs8mkY8JeZRiH0XosDztOVQJWHIe21lZyyy4x28LILdEowtOmYpvAhLIJLJM+r0xEKbp8n7hAHCGyPtPtkmE8KAD6zBmVSacHlcgTiIwAewB7bec9rclqMJRBo0C7DjH+7dv9BbGg+7TLytfOaXPh2LGDWf/LjzterLQUrjiUblrrAtpEaBOAEPS65f9M+7CStqkuGrbp9FbHYwNeS/GGxdx3iuvFIgAPOw7dZi33/EOoNemKx4Lv02kYJCIOufNRgGFZSKVKQORyqcx4uYrpOIDgl0u8EnM4GHFqSh4Ary3nmTdMLMui6vu0eh5vt8SJimACuqQ175Uq7No3yONHjiBopqamGJ+ZYb9jE5GNz6tPV4ss2A7PPvcCnZ3t5HJ5Pjj7PhOFVcbijSUFZOaqPpgmiUSCrdv76dn2AAcSCWzbCuerfk2v/qvWma29vXR2dtDT18+WLS3sHNjFLbgjWo+ZgWEc9vGeaVfqhOsW+pcWbxMCrpvHt6w3N5nqLdj4p1+KRYtuzl3yq34sn1vCq5TJ3r0bZo2Gvb0XLtz5vbfDw6MdKqq+Shw41BcSkr52db6igqGrFy/eq6UDAIdGjr7U1d317u49+9T3P9wk8+Ps65c/v3QK/jSIhpLJuO0FowJaBd7k9PT0Sq3J1zw6cnQ3Wg9qrW9c++Kz9P06t66urq5mvwENmU4th7X62AAAAABJRU5ErkJggg==", 24, 24, { alt: "*", flipRtl: "FALSE" }))
// // //         .appendField(Blockly.Msg.AIDUDE_CAR_CLASSIFICATION);
// // //     this.appendStatementInput("code")
// // //         .setCheck(null);
// // //     this.setInputsInline(true);
// // //     this.setPreviousStatement(true, null);
// // //     this.setNextStatement(true, null);
// // //     this.setColour(105);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_CAR_CLASSIFICATION_DESC);
// // //  this.setHelpUrl("");
// // //   },
// // //   xmlToolbox: function() {
// // //         return $(document.createElement('block')).attr({
// // //             type: 'aidude_car_classification'
// // //         }).append(`
// // //         <statement name="code">
// // //           <block type="variables_set">
// // //             <field name="VAR">class_name</field>
// // //             <value name="VALUE">
// // //               <block type="aidude_get_class">
// // //                 <field name="attr">name</field>
// // //               </block>
// // //             </value>
// // //           </block>
// // //         </statement>`
// // //        );
// // //    }
// // // };

// // // Blockly.Blocks['aidude_get_object'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(Blockly.Msg.AIDUDE_GET_OBJ)
// // //         .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AIDUDE_CENTER_X,"x"], [Blockly.Msg.AIDUDE_CENTER_Y,"y"], [Blockly.Msg.AIDUDE_WIDTH,"width"], [Blockly.Msg.AIDUDE_HEIGHT,"height"], [Blockly.Msg.AIDUDE_ID,"class id"], [Blockly.Msg.AIDUDE_CONFIDENCE,"confidence"]]), "attr");
// // //     this.setOutput(true, null);
// // //     this.setColour(230);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_GET_OBJ_DESC);
// // //  this.setHelpUrl("");
// // //   }
// // // };

// // // Blockly.Blocks['aidude_get_class'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(Blockly.Msg.AIDUDE_GET_CLASS)
// // //         .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AIDUDE_ID,"id"], [Blockly.Msg.AIDUDE_NAME,"name"]]), "attr");
// // //     this.setOutput(true, null);
// // //     this.setColour(230);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_GET_CLASS_DESC);
// // //  this.setHelpUrl("");
// // //   }
// // // };

// // // Blockly.Blocks['aidude_get_wake_word'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(Blockly.Msg.AIDUDE_GET_WAKE_WORD)
// // //         .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AIDUDE_ID,"id"], [Blockly.Msg.AIDUDE_NAME,"name"]]), "attr");
// // //     this.setOutput(true, null);
// // //     this.setColour(230);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_GET_WAKE_WORD_DESC);
// // //  this.setHelpUrl("");
// // //   }
// // // };

// // // Blockly.Blocks['aidude_get_face'] = {
// // //   init: function() {
// // //     this.appendDummyInput()
// // //         .appendField(Blockly.Msg.AIDUDE_GET_FACE)
// // //         .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AIDUDE_ID,"id"], [Blockly.Msg.AIDUDE_NAME,"name"], [Blockly.Msg.AIDUDE_CONFIDENCE,"confidence"]]), "attr");
// // //     this.setOutput(true, null);
// // //     this.setColour(230);
// // //  this.setTooltip(Blockly.Msg.AIDUDE_GET_FACE_DESC);
// // //  this.setHelpUrl("");
// // //   }
// // // };