/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5cd2a41a7c59b20001be8dda */

const removeExclamationMarks = (str) => {
    return str
        .split('')
        .filter((char) => char !== '!')
        .join('');
};

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
