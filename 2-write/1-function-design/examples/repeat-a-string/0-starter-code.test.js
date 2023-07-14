'use strict';

/* 0. Starter Code

  Each exercises will have this format:
  - a JSDoc describing the behavior
  - an empty space where you'll write your solutions
  - a for-of loop with test cases inside
  - a secret solution you can use to write tests

*/

// =============== JSDoc description of the challenge ===============

/**
 * Repeats a string a specific number of times.
 *
 * @param {string} [text=''] - The string to repeat. defaults to empty string.
 * @param {number} [repetitions=1] - How many times to repeat. defaults to 1.
 *  Repetitions must be greater than zero, and must be an integer.
 * @return {string} The text repeated as many times as repetitions.
 */

// =============== your solutions will go here ===============
const repeatStr1 = (text = '', repetitions = 1) => {
    return text.repeat(repetitions);
};

const repeatStr2 = (text = '', repetitions = 1) => {
    let newText = '';
    for (let i = 0; i < repetitions; i++) {
        newText += text;
    }
    return newText;
};

// =============== a for-of loop to control which solution(s) are tested ===============

const mySolutions = [repeatStr1, repeatStr2];
for (const solution of mySolutions) {
    // =============== test cases for this challenge ===============
    describe('Repeats a string a specific number of times', () => {
        describe('if both text and repetitions passed ', () => {
            it('hi , 5 -> hihihihihi', () => {
                expect(solution('hi', 5)).toEqual('hihihihihi');
            });

            it('go to school , 2 -> go to schoolgo to school', () => {
                expect(solution('go to school', 2)).toEqual(
                    'go to schoolgo to school',
                );
            });

            it('merci , 2 -> mercimerci', () => {
                expect(solution('merci', 2)).toEqual('mercimerci');
            });
        });

        describe('default parameters ', () => {
            it(' "" , 3 -> hihihihihi', () => {
                expect(solution('', 3)).toEqual('');
            });

            it(' table ,  -> table', () => {
                expect(solution('table')).toEqual('table');
            });
        });
    });
}

// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
function secretSolution(a = "", b = 1) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("number" != typeof b) { throw new TypeError("repetitions is not a number"); } if (0 > b) { throw new RangeError("repetitions is less than zero"); } if (!Number.isInteger(b)) { throw new RangeError("repetitions is not an integer"); } return Array(b).fill(a).join(""); }
