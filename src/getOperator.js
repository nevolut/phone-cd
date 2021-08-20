"use strict";
exports.__esModule = true;
var national_1 = require("./national");
/**
 * @description Verify the phone number operatore
 * @param {number} string
 * @returns then oprator
 */
exports["default"] = (function (value) {
    if (!value)
        return null;
    var number = national_1["default"](value);
    if (number.toString().length !== 9)
        return null;
    var prefix = parseInt(number.toString().substr(0, 2));
    if ([81, 82, 83].includes(prefix))
        return "vodacom";
    if ([80, 84, 85, 89].includes(prefix))
        return "orange";
    if ([90, 91].includes(prefix))
        return "africel";
    if ([97, 98, 99].includes(prefix))
        return "airtel";
    return null;
});
