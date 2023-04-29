/**
 * Format the phone number to national drc format.
 * @param {number} string
 * @returns number in national format
 */

const national = (value: string | number): number => {
  let number = +String(value).replace(/\D/g, "");
  if (number.toString().substr(0, 4) == "+243") number = +number.toString().slice(4);
  else if (number.toString().substr(0, 3) == "243") number = +number.toString().slice(3);

  return number;
};

export default national;
