import nantional from "./national";
import operator from "./getOperator";

export default number => {
  if (!number) return null;
  number = nantional(number);
  if (operator(number)) return true;

  return false;
};
