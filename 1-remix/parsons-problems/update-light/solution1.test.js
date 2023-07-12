import { updateLight } from './solution1.js';

describe('updateLight', () => {
    it('green to yellow', () => {
        expect(updateLight('green')).toEqual('yellow');
    });

    it('from yellow to red', () => {
        expect(updateLight('yellow')).toEqual('red');
    });

    it('from red to green', () => {
        expect(updateLight('red')).toEqual('green');
    });

    it('green when given an invalid current light', () => {
        expect(updateLight('invalid')).toEqual('green');
    });
});
