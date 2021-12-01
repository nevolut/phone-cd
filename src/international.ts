import national from "./national";
import operator from "./operator";

/**
 * @description Format the phone number to 243 format
 * @param {number} string
 * @returns number in international format
 */
const international = (value: string | number): number | null => {
  if (!value) return null;
  const number = national(value);
  if (operator(number)) return +`243${number}`;

  return null;
};

export default international;
