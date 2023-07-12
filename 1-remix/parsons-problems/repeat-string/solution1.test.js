import { repeatString } from './solution1.js';

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
