'use strict';

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------

const mapFilterReduce = (arr) => {
    // these work, you need to pass them to the right array methods
    const isNotNaN = (entry) => !Number.isNaN(entry);
    const sumNumbers = (acc, next) => acc + next;
    const castToNumber = (entry) => Number(entry);

    // fill in the array methods and pass in the correct logic
    const sumOfNumberies = arr
        .map(castToNumber)
        .filter(isNotNaN)
        .reduce(sumNumbers, 0);

    return sumOfNumberies;
};

// -------- your solutions --------

for (const solution of [
    //secretSolution,
    mapFilterReduce,
]) {
    describe(solution.name + 'sumNumberyStrings', () => {
        it('returns 0 for an empty array', () => {
            const result = sumNumberyStrings([]);
            expect(result).toBe(0);
        });

        it('returns the sum of numbery strings', () => {
            const arr = ['12', '34', '56', 'abc', '78'];
            const result = sumNumberyStrings(arr);
            expect(result).toBe(12 + 34 + 56 + 78);
        });

        it('returns 0 if no numbery strings are found', () => {
            const arr = ['abc', 'def', 'xyz'];
            const result = sumNumberyStrings(arr);
            expect(result).toBe(0);
        });

        it('does not modify the original array', () => {
            const arr = ['12', '34', '56'];
            sumNumberyStrings(arr);
            expect(arr).toEqual(['12', '34', '56']);
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
