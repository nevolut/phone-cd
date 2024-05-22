"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const national_1 = require("./national");
const operator_1 = require("./operator");
const isValid = (value) => {
    if (!value)
        return null;
    const number = (0, national_1.default)(value);
    if ((0, operator_1.default)(number))
        return true;
    return false;
};
exports.default = isValid;
//# sourceMappingURL=isValid.js.map