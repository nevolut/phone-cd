import national from "./national";

/**
 * Verifies the phone number operator.
 * @param {string | number} value - The phone number to verify.
 * @returns {string | null} The operator name or null if invalid.
 */
const operator = (value: string | number): string | null => {
  if (!value) return null;
  const number = national(value).toString();

  if (number.length !== 9) return null;

  if (/^(81|82|83|86)/.test(number)) return "vodacom";
  if (/^(80|84|85|89)/.test(number)) return "orange";
  if (/^(90|91)/.test(number)) return "africel";
  if (/^(87|97|98|99)/.test(number)) return "airtel";

  return null;
};

export default operator;
