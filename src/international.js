const local = require("./national");
const operator = require("./operator");

module.exports = number => {
  if (!number) return null;
  number = local(number);
  if (operator(number)) return `243${number}`;

  return null;
};