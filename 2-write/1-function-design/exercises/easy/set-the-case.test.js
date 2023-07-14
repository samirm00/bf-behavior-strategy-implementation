// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------
const setTextCase1 = (text = '', lowerCase = true) => {
    if (lowerCase) {
        return text.toLowerCase();
    } else {
        return text.toUpperCase();
    }
};

const setTextCase2 = (text = '', lowerCase = true) => {
    return lowerCase ? text.toLowerCase() : text.toUpperCase();
};
const mySolutions = [setTextCase1, setTextCase2];

for (const solution of mySolutions) {
    describe(solution.name + ': sets a text to lower or upper case', () => {
        describe("the function's default parameters", () => {
            it('second parameter defaults to true', () => {
                expect(solution('asdf')).toEqual('asdf');
            });
            it('first parameter defaults to an empty string', () => {
                expect(solution()).toEqual('');
            });
        });

        describe('when set to lower case', () => {
            it('emptyString, true -> emptyString', () => {
                expect(solution('', true)).toEqual('');
            });

            it('ALLUPPERCASE, true -> alluppercase', () => {
                expect(solution('ALLUPPERCASE', true)).toEqual('alluppercase');
            });

            it('alllowercase, true -> alllowercase', () => {
                expect(solution('alllowercase', true)).toEqual('alllowercase');
            });

            it('MiXeDUppERaNDloWER, true -> mixedupperandlower', () => {
                expect(solution('MiXeDUppERaNDloWER', true)).toEqual(
                    'mixedupperandlower',
                );
            });

            it('Text!With@Punctuation, true -> text!with@punctuation', () => {
                expect(solution('Text!With@Punctuation', true)).toEqual(
                    'text!with@punctuation',
                );
            });

            it('1234567890, true -> 1234567890', () => {
                expect(solution('1234567890', true)).toEqual('1234567890');
            });
        });

        describe('when set to upper case', () => {
            it('emptyString, false -> EMPTYSTRING', () => {
                expect(solution('', false)).toEqual('');
            });

            it('ALLUPPERCASE, false -> ALLUPPERCASE', () => {
                expect(solution('ALLUPPERCASE', false)).toEqual('ALLUPPERCASE');
            });

            it('alllowercase, false -> ALLLOWERCASE', () => {
                expect(solution('alllowercase', false)).toEqual('ALLLOWERCASE');
            });

            it('MiXeDUppERaNDloWER, false -> MIXEDUPPERANDLOWER', () => {
                expect(solution('MiXeDUppERaNDloWER', false)).toEqual(
                    'MIXEDUPPERANDLOWER',
                );
            });

            it('Text!With@Punctuation, false -> TEXT!WITH@PUNCTUATION', () => {
                expect(solution('Text!With@Punctuation', false)).toEqual(
                    'TEXT!WITH@PUNCTUATION',
                );
            });

            it('1234567890, false -> 1234567890', () => {
                expect(solution('1234567890', false)).toEqual('1234567890');
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
