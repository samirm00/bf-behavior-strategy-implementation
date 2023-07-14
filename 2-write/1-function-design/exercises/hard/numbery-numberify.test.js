'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------
const convertToNumbers1 = (arr) => {
    // copy arr
    const arrCopy = [...arr];
    return arrCopy
        .map((item) => Number(item))
        .filter((item) => !Number.isNaN(item));
};

const convertToNumbers2 = (arr) => {
    const onlyNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isNaN(Number(arr[i]))) {
            onlyNumbers.push(Number(arr[i]));
        }
    }

    return onlyNumbers;
};

const mySolutions = [convertToNumbers1, convertToNumbers2];

for (const solution of mySolutions) {
    describe(solution.name + 'convertToNumbers', () => {
        test('should convert all valid string numbers to numbers', () => {
            const arr = ['10', '20', '30', 'test'];
            const result = solution(arr);
            expect(result).toEqual([10, 20, 30]);
        });

        test('should ignore non-numeric values in the array', () => {
            const arr = ['10', 'abc', '20', 'xyz', '30'];
            const result = solution(arr);
            expect(result).toEqual([10, 20, 30]);
        });

        test('should return an empty array if all values are non-numeric', () => {
            const arr = ['abc', 'def', 'xyz'];
            const result = solution(arr);
            expect(result).toEqual([]);
        });

        test('should handle an empty array', () => {
            const arr = [];
            const result = solution(arr);
            expect(result).toEqual([]);
        });

        test('should handle an array with a single number', () => {
            const arr = ['42'];
            const result = solution(arr);
            expect(result).toEqual([42]);
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
