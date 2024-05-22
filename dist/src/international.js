"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const national_1 = require("./national");
const operator_1 = require("./operator");
const international = (value) => {
    if (!value)
        return null;
    const number = (0, national_1.default)(value);
    if ((0, operator_1.default)(number))
        return +`243${number}`;
    return null;
};
exports.default = international;
//# sourceMappingURL=international.js.map