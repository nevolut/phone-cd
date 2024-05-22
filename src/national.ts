/**
 * Formats the phone number to the national DRC format.
 * @param {string | number} value - The phone number to format.
 * @returns {number} The phone number in national format.
 */
const formatToNationalDRC = (value: string | number): number => {
  // Convert the input value to a string and remove all non-digit characters
  let phoneNumber = String(value).replace(/\D/g, "");

  // Remove the international DRC code if present
  if (phoneNumber.startsWith("+243")) {
    phoneNumber = phoneNumber.slice(4);
  } else if (phoneNumber.startsWith("243")) {
    phoneNumber = phoneNumber.slice(3);
  }

  // Convert the resulting string back to a number
  return +phoneNumber;
};

export default formatToNationalDRC;
