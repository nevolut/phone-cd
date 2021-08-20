"use strict";
exports.__esModule = true;
var national_1 = require("./national");
var getOperator_1 = require("./getOperator");
/**
 * @description Format the phone number to 243 format
 * @param {number} string
 * @returns number in international format
 */
exports["default"] = (function (value) {
    if (!value)
        return null;
    var number = national_1["default"](value);
    if (getOperator_1["default"](number))
        return +("243" + number);
    return null;
});
