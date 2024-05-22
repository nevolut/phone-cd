/**
 * Formats the phone number to the national DRC format.
 * @param {string | number} value - The phone number to format.
 * @returns {number} The phone number in national format.
 */
const national = (value: string | number): number => {
  // Convert the input value to a string and remove all non-digit characters
  let number = +String(value).replace(/\D/g, "");

  // Remove the international DRC code if present
  if (number.toString().startsWith("+243")) {
    number = +number.toString().slice(4);
  } else if (number.toString().startsWith("243")) {
    number = +number.toString().slice(3);
  }

  return number;
};

export default national;
