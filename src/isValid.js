"use strict";
exports.__esModule = true;
var national_1 = require("./national");
var getOperator_1 = require("./getOperator");
/**
 * Check if a number is valid
 * @param {number} string
 * @returns true if number if valid drc phone number format
 */
exports["default"] = (function (value) {
    if (!value)
        return null;
    var number = national_1["default"](value);
    if (getOperator_1["default"](number))
        return true;
    return false;
});
