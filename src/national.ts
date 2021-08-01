export default number => {
  number = parseInt(number);
  if (number.toString().substr(0, 4) == "+243")
    number = number.toString().slice(4);
  else if (number.toString().substr(0, 3) == "243")
    number = number.toString().slice(3);

  return number;
};
