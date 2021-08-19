import nantional from "./national";
import getOperator from "./getOperator";
/**
 * Check if a number is valid
 * @param {number} string
 * @returns true if number if valid drc phone number format
 */
export default (value) => {
    if (!value)
        return null;
    const number = nantional(value);
    if (getOperator(number))
        return true;
    return false;
};
