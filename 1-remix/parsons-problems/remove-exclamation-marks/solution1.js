/**
 * Remove exclamation marks from a string.
 *
 * @param {string} str - The string to remove ! from.
 * @returns A new string without !.
 */

export const removeExclamationMarks = (str) => {
    return str.replaceAll('!', '');
};
