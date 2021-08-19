"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var national_1 = require("./src/national");
var international_1 = require("./src/international");
var getOperator_1 = require("./src/getOperator");
var isValid_1 = require("./src/isValid");
exports.default = { national: national_1.default, international: international_1.default, operator: getOperator_1.default, isValid: isValid_1.default };
