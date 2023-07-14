// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------
const reverseStrAndChangeCase1 = (text = '', lowerCase = true) => {
    let reverseStr = text.split('').reverse().join('');
    if (lowerCase) {
        reverseStr = reverseStr.toLowerCase();
    } else {
        reverseStr = reverseStr.toUpperCase();
    }

    return reverseStr;
};

const reverseStrAndChangeCase2 = (text = '', lowerCase = true) => {
    let reverseStr = text.split('').reverse().join('');
    return (reverseStr = lowerCase
        ? reverseStr.toLowerCase()
        : reverseStr.toUpperCase());
};

const mySolutions = [reverseStrAndChangeCase1, reverseStrAndChangeCase2];
for (const solution of mySolutions) {
    describe(': reverses a string then sets to lower or upper case', () => {
        describe("the function's default parameters", () => {
            it('second parameter defaults to true', () => {
                expect(solution('asdf')).toEqual('fdsa');
            });
            it('first parameter defaults to an empty string', () => {
                expect(solution()).toEqual('');
            });
        });
        // write the tests indicated by the comments
        describe('when set to lower case', () => {
            // when the text is an empty string
            it('emptyString -> emptyString', () => {
                expect(solution('', true)).toEqual('');
            });
            // when the text is all upper case
            it('HELLO -> olleh', () => {
                expect(solution('HELLO', true)).toEqual('olleh');
            });
            // when the text is all lower case
            it('hello -> olleh', () => {
                expect(solution('hello', true)).toEqual('olleh');
            });
            // when the text is mixed upper and lower case
            it('heLLo -> olleh', () => {
                expect(solution('heLLo', true)).toEqual('olleh');
            });
            // when the text contains punctuation
            it('hello! -> !olleh', () => {
                expect(solution('hello!', true)).toEqual('!olleh');
            });
            // when the text contains numbers
            it('hello123 -> 321olleh', () => {
                expect(solution('hello123', true)).toEqual('321olleh');
            });
        });
        describe('when set to upper case', () => {
            // when the text is an empty string
            // when the text is all upper case
            // when the text is all lower case
            // when the text is mixed upper and lower case
            // when the text contains punctuation
            // when the text contains numbers
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
