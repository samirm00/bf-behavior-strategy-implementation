/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5adb82cd43f6f7525400142f */

const updateLight = (current) => {
    const lights = {
        green: 'yellow',
        yellow: 'red',
        red: 'green',
    };

    return lights[current] ? lights[current] : 'green';
};

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
