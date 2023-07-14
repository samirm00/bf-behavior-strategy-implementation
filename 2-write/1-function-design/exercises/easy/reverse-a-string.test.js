// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
const reverseStr1 = (str = '') => {
    if (str === '') {
        return str;
    }
    return str.split('').reverse().join('');
};

const mySolutions = [reverseStr1];
for (const solution of mySolutions) {
    // the main test suite for the function
    describe(solution.name + ': reverses a string', () => {
        it('default parameter is an empty string -> ""', () => {
            expect(solution()).toEqual('');
        });
        it('an empty string -> ""', () => {
            expect(solution('')).toEqual('');
        });
        it('a string with all capital letters', () => {
            expect(solution('ASDF')).toEqual('FDSA');
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
