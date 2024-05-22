"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const national = (value) => {
    let number = +String(value).replace(/\D/g, "");
    if (number.toString().startsWith("+243")) {
        number = +number.toString().slice(4);
    }
    else if (number.toString().startsWith("243")) {
        number = +number.toString().slice(3);
    }
    return number;
};
exports.default = national;
//# sourceMappingURL=national.js.map