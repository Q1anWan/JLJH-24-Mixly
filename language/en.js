/*
 * @Description: English discribution
 * @Author: qianwan
 * @Date: 2023-12-16 22:12:55
 * @LastEditTime: 2024-01-20 02:09:33
 * @LastEditors: qianwan
 */
(() => {

    goog.require('Blockly.Lang');
    const { En } = Blockly.Lang;

    En.CHASSIS_INIT = 'Init chassis controller'
    En.CHASSIS_INIT_AUTOREEN_MOTORS = 'Motors automatically enable'
    En.CHASSIS_INIT_AUTOREEN_PWM = ' PWM automatically enable'

    En.CHASSIS_SET_MOTORS_STATUS = 'Chassis motors status'
    En.CHASSIS_SET_PWM_STATUS = 'Chassis PWM status'
    En.CHASSIS_CHECK_CN = 'Chassis communication status'

    En.CHASSIS_MOVE = 'Set motors speed(rpm)'
    En.CHASSIS_GET_VEL = 'Chassis velocity'
    En.CHASSIS_GET_INS = 'Heading angle (°)'
    En.CHASSIS_RST_INS = 'Reset heading angle'

    En.CHASSIS_SERVOS = 'Set PWM generation'
    En.CHASSIS_SERVOS_DC = 'Compare value:'

    En.LED_INIT = 'Init LED'
    En.LED_SET_COLOR = 'Set LED color'

})();