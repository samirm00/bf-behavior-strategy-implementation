/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5aeadb48a8d2b32b8a0024e6 */

/* this exercise has 1 distractor */

const updateLight = (current) => {
    const lights = {
        green: 'yellow',
        yellow: 'red',
        red: 'green',
    };
    if (lights[current]) {
        return lights[current];
    } else {
        return 'green';
    }
};

updateLight('red');
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
