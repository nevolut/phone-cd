"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatToNationalDRC = (value) => {
    let phoneNumber = String(value).replace(/\D/g, "");
    if (phoneNumber.startsWith("+243")) {
        phoneNumber = phoneNumber.slice(4);
    }
    else if (phoneNumber.startsWith("243")) {
        phoneNumber = phoneNumber.slice(3);
    }
    return +phoneNumber;
};
exports.default = formatToNationalDRC;
//# sourceMappingURL=national.js.map