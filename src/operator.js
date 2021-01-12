const local = require("./national");

module.exports = number => {
  if (!number) return null;
  number = local(number);

  if (number.toString().length !== 9) return null;

  const prefix = parseInt(number.toString().substr(0, 2));
  if ([81, 82].includes(prefix)) return `vodacom`;

  if ([80, 84, 85, 89].includes(prefix)) return `orange`;

  if ([90, 91].includes(prefix)) return `africel`;

  if ([97, 98, 99].includes(prefix)) return `airtel`;

  return null;
};