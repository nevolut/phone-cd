import nantional from "./national";
import operator from "./operator";

/**
 * Check if a number is valid
 * @param {number} string
 * @returns true if number if valid drc phone number format
 */
const isValid = (value: string | number): boolean => {
  if (!value) return null;
  const number = nantional(value);
  if (operator(number)) return true;

  return false;
};

export default isValid;
