'use strict';

/**
 * returns a new array containing all passing objects
 *  passing objects have a property "pass" with the value true
 *  if an object does not have the entry "pass": true, it is not passing
 * @param {Array.<Object>} arr - an array of objects to filer
 * @returns {Array.<Object>} a new array containing only passing objects
 */

// -------- your solutions --------

const onlyPassedObject1 = (arr) => {
    // copy arr
    const arrCopy = [...arr];
    return arrCopy.filter((obj) => obj.pass === true);
};

const onlyPassedObject2 = (arr) => {
    const newArr = [];
    arr.forEach((obj) => {
        if (obj.pass === true) {
            newArr.push(obj);
        }
    });

    return newArr;
};

const mySolutions = [onlyPassedObject1, onlyPassedObject2];

for (const solution of mySolutions) {
    describe(solution.name + ': filters out non-passing objects', () => {
        describe('correctly filters an array', () => {
            it('an empty array returns an empty array', () => {
                const actual = solution([]);
                expect(actual).toEqual([]);
            });

            it('keeps all entries when all are passing', () => {
                const actual = solution([{ pass: true }, { pass: true }]);
                expect(actual).toEqual([{ pass: true }, { pass: true }]);
            });

            it('removes all entries when all are not passing', () => {
                const actual = solution([{ pass: false }, { pass: false }]);
                expect(actual).toEqual([]);
            });

            it('removes only not-passing entries', () => {
                const actual = solution([
                    { pass: true },
                    { pass: false },
                    { pass: true },
                ]);
                expect(actual).toEqual([{ pass: true }, { pass: true }]);
            });

            it('removes entries with a truthy, but not true, .pass value', () => {
                const actual = solution([
                    { pass: 100 },
                    { pass: 'hello' },
                    { pass: true },
                ]);
                expect(actual).toEqual([{ pass: true }]);
            });

            it('removes entries with no .pass property', () => {
                const actual = solution([
                    { hello: 'test' },
                    { bye: 'test' },
                    { pass: true },
                    { passing: 'testing' },
                ]);
                expect(actual).toEqual([{ pass: true }]);
            });
        });

        describe('does not modify the argument', () => {
            it('returns a new array', () => {
                const arg = [];
                const actual = solution(arg);
                const areNotTheSameArray = arg !== actual;
                expect(areNotTheSameArray).toEqual(true);
            });

            it('does not modify the argument', () => {
                const arg = [
                    { pass: true },
                    { pass: false },
                    { hello: 'good bye' },
                ];
                solution(arg);
                expect(arg).toEqual([
                    { pass: true },
                    { pass: false },
                    { hello: 'good bye' },
                ]);
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } if (!a.every(a => Object(a) === a)) { throw new TypeError("arr is not an array of objects"); } const b = a.filter(a => !0 === a.pass); return b }



