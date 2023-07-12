/**
 * Check if an array items all are numbers.
 *
 * @param {any[]} arr - The array to check if all it's items are numbers
 * @returns {boolean} - if all items in arr are numbers
 */

export const isArrayOfNumbers = (arr = []) => {
    if (!Array.isArray(arr)) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            return false;
        }
    }

    return true;
};
