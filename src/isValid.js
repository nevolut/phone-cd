"use strict";
exports.__esModule = true;
var national_1 = require("./national");
var operator_1 = require("./operator");
/**
 * Check if a number is valid
 * @param {number} string
 * @returns true if number if valid drc phone number format
 */
var isValid = function (value) {
    if (!value)
        return null;
    var number = (0, national_1["default"])(value);
    if ((0, operator_1["default"])(number))
        return true;
    return false;
};
exports["default"] = isValid;
