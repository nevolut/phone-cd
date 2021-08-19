import national from "./national";
import getOperator from "./getOperator";
/**
 * @description Format the phone number to 243 format
 * @param {number} string
 * @returns number in international format
 */
export default (value) => {
    if (!value)
        return null;
    const number = national(value);
    if (getOperator(number))
        return +`243${number}`;
    return null;
};
