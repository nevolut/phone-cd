"use strict";
exports.__esModule = true;
var national_1 = require("./national");
var operator_1 = require("./operator");
/**
 * @description Format the phone number to 243 format
 * @param {number} string
 * @returns number in international format
 */
var international = function (value) {
    if (!value)
        return null;
    var number = (0, national_1["default"])(value);
    if ((0, operator_1["default"])(number))
        return +"243".concat(number);
    return null;
};
exports["default"] = international;
