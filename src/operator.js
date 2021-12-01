"use strict";
exports.__esModule = true;
var national_1 = require("./national");
/**
 * @description Verify the phone number operatore
 * @param {number} string
 * @returns then oprator
 */
var operator = function (value) {
    if (!value)
        return null;
    var number = (0, national_1["default"])(value).toString();
    if (number.length !== 9)
        return null;
    if (/^(81|81|83)/.test(number))
        return "vodacom";
    if (/^(80|84|85|89)/.test(number))
        return "orange";
    if (/^(90|91)/.test(number))
        return "africel";
    if (/^(97|98|99)/.test(number))
        return "airtel";
    return null;
};
exports["default"] = operator;
