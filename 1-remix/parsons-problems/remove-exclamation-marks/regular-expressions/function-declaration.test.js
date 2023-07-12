/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f94b0a2faf02e74c000557 */

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
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
