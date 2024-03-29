"use strict";
/**
 * Format the phone number to national drc format.
 * @param {number} string
 * @returns number in national format
 */
exports.__esModule = true;
var national = function (value) {
    var number = +String(value).replace(/\D/g, "");
    if (number.toString().substr(0, 4) == "+243")
        number = +number.toString().slice(4);
    else if (number.toString().substr(0, 3) == "243")
        number = +number.toString().slice(3);
    return number;
};
exports["default"] = national;
