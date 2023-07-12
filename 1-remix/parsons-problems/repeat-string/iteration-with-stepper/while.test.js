/* 4 extra lines */

/* parsons-collapse: iterating over the number of repetitions

  repeatString(text, repetitions) =>
    1. create a new string to fill with many text's
    2. create and initialize a stepper variable
    3. iterate repetitions number of times
      a. check if stepper is still less than repetitions
        keep going if it is, otherwise stop iterating
      b. append text to the new string
      c. increment the stepper
      d. repeat
    return: the new repeated string

*/

const repeatString = (text = '', repetitions = 1) => {
    let repeatedText = '';
    let count = 0;
    while (count < repetitions) {
        repeatedText = repeatedText + text;
        count++;
    }
    return repeatedText;
};

describe('repeatString', () => {
    it('hello, 3 -> hellohellohello', () => {
        expect(repeatString('hello', 3)).toEqual('hellohellohello');
    });
    it('abc , 5 -> abcabcabcabcabc', () => {
        expect(repeatString('abc', 5)).toEqual('abcabcabcabcabc');
    });
    it('123, 2 -> 123123', () => {
        expect(repeatString('123', 2)).toEqual('123123');
    });

    it(' -> empty string', () => {
        expect(repeatString()).toEqual('');
    });

    it('hello, 0 -> empty string', () => {
        expect(repeatString('hello', 0)).toEqual('');
    });
});
