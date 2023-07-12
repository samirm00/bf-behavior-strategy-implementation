import { addArrays } from './solution1.js';

describe('addArrays', () => {
    it('[1, 2], [4, 5] -> [5, 7]', () => {
        expect(addArrays([1, 2], [4, 5])).toEqual([5, 7]);
    });

    it('[-1, 3, 8], [10, 2, -5] -> [9, 5, 3]', () => {
        expect(addArrays([-1, 3, 8], [10, 2, -5])).toEqual([9, 5, 3]);
    });

    it(' [0], [0] -> [0]', () => {
        expect(addArrays([0], [0])).toEqual([0]);
    });

    it('should throw an error ', () => {
        expect(() => addArrays(['a'], ['b', 'c'])).toThrow(
            'arrays have a different length',
        );
    });

    it('should throw an error', () => {
        expect(() => addArrays(['a'], ['b', 'c'])).toThrow(
            'arrays have a different length',
        );
    });
});
