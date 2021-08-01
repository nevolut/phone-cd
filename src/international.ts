import local from "./national";
import operator from "./getOperator";

export default number => {
  if (!number) return null;
  number = local(number);
  if (operator(number)) return `243${number}`;

  return null;
};
