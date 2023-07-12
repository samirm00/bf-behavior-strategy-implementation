/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c3b87b60eaa400010537e8 */

function removeExclamationMarks(str) {
    while (str.includes('!')) {
        let index = str.indexOf('!');
        str = str.slice(0, index).concat(str.slice(index + 1, str.length));
    }

    return str;
}

describe('remove exclamation marks from a string', () => {
    it('Hello!  -> Hello', () => {
        expect(removeExclamationMarks('Hello!')).toEqual('Hello');
    });

    it('go! and come! -> go and come', () => {
        expect(removeExclamationMarks('go! and come!')).toEqual('go and come');
    });
    it('hi!!!!!!!!!! -> hi', () => {
        expect(removeExclamationMarks('hi!!!!!!!!!!')).toEqual('hi');
    });
});
