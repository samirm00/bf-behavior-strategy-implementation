'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------
const keepOnlyEvenNumbers1 = (arr) => {
    // copy arr
    const arrCopy = [...arr];
    // make sure all items are number
    const allAreNumbers = arrCopy.every((item) => typeof item === 'number');
    if (!allAreNumbers) {
        return [];
    }

    return arrCopy.filter((item) => item % 2 === 0);
};

const keepOnlyEvenNumbers2 = (arr) => {
    // copy arr
    const arrCopy = [...arr];
    // make sure all items are number
    const allAreNumbers = arrCopy.every((item) => typeof item === 'number');
    if (!allAreNumbers) {
        return [];
    }

    const onlyEven = [];
    for (let i = 0; i < arrCopy.length; i++) {
        if (arrCopy[i] % 2 === 0) {
            onlyEven.push(arrCopy[i]);
        }
    }

    return onlyEven;
};
const mySolutions = [keepOnlyEvenNumbers1, keepOnlyEvenNumbers2];

for (const solution of mySolutions) {
    describe(solution.name + ': keep only even items', () => {
        it('returns an empty array when input contains non-number elements', () => {
            const input = [1, 2, '3', 4, 5];
            const output = solution(input);
            expect(output).toEqual([]);
        });

        it('returns an array containing only even numbers', () => {
            const input = [1, 2, 3, 4, 5, 6];
            const output = solution(input);
            expect(output).toEqual([2, 4, 6]);
        });

        it('returns an empty array when input is an empty array', () => {
            const input = [];
            const output = solution(input);
            expect(output).toEqual([]);
        });

        it('returns an empty array when input contains no even numbers', () => {
            const input = [1, 3, 5, 7];
            const output = solution(input);
            expect(output).toEqual([]);
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
