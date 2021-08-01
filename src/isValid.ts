import nantional from "./national";
import operator from "./getOperator";

/**
 * Check if a number is valid
 * @param {number} string
 * @returns true if number if valid drc phone number format
 */
export default (value: string | number): boolean => {
  if (!value) return null;
  const number = nantional(value);
  if (operator(number)) return true;

  return false;
};
