/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

function removeExclamationMarks(str) {
    var newString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '!') {
            newString += str[i];
        }
    }
    return newString;
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
