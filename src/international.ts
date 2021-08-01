import national from "./national";
import operator from "./getOperator";

/**
 * @description Format the phone number to 243 format
 * @param {number} string
 * @returns number in international format
 */
export default (value: string | number): number | null => {
  if (!value) return null;
  const number = national(value);
  if (operator(number)) return +`243${number}`;

  return null;
};
