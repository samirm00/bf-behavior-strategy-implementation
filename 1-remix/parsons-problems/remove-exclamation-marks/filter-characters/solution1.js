/**
 * Remove ! mark for a string.
 *
 * @param {string} str -The string to remove ! from.
 * @returns {string} - A new newStr without !.
 */

export const removeExclamationMarks = (str) => {
    let newStr = '';
    for (const char of str) {
        if (char !== '!') {
            newStr += char;
        }
    }

    return newStr;
};
