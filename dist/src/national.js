"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const national = (value) => {
    let number = +String(value).replace(/\D/g, "");
    if (String(number).startsWith("+243")) {
        number = +String(number).slice(4);
    }
    else if (String(number).startsWith("243")) {
        number = +String(number).slice(3);
    }
    return number;
};
exports.default = national;
//# sourceMappingURL=national.js.map