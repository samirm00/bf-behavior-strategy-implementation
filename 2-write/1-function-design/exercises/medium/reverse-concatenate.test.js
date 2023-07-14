'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------
const reverseItemsAndJoin1 = (arr) => {
    // copy arr
    const arrCopy = [...arr];
    const allAreStrings = arrCopy.every((item) => typeof item === 'string');
    if (!allAreStrings) {
        return '';
    }

    return arrCopy.reduce(
        (acc, item) => acc + item.split('').reverse().join(''),
        '',
    );
};

const reverseItemsAndJoin2 = (arr) => {
    // copy arr
    const arrCopy = [...arr];
    const allAreStrings = arrCopy.every((item) => typeof item === 'string');
    if (!allAreStrings) {
        return '';
    }

    let newString = '';
    for (let i = 0; i < arrCopy.length; i++) {
        newString += arrCopy[i].split('').reverse().join('');
    }

    return newString;
};

const mySolutions = [reverseItemsAndJoin1, reverseItemsAndJoin2];
for (const solution of mySolutions) {
    describe(solution.name + 'reverseItemsAndJoin', () => {
        test('should reverse and join strings in the array', () => {
            const arr = ['hello', 'world'];
            const result = solution(arr);
            expect(result).toEqual('ollehdlrow');
        });

        test('should return an empty string if array contains non-strings', () => {
            const arr = ['hello', 123, 'world'];
            const result = solution(arr);
            expect(result).toEqual('');
        });

        test('should return an empty string if the array is empty', () => {
            const arr = [];
            const result = solution(arr);
            expect(result).toEqual('');
        });

        test('should handle an array with a single string', () => {
            const arr = ['hello'];
            const result = solution(arr);
            expect(result).toEqual('olleh');
        });

        test('should handle an array with multiple empty strings', () => {
            const arr = ['', '', ''];
            const result = solution(arr);
            expect(result).toEqual('');
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }


