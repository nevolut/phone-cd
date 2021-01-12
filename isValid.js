const local = require("./local");
const operator = require("./operator");

module.exports = number => {
  if (!number) return null;
  number = local(number);
  if (operator(number)) return true;

  return false;
};