/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/6074247d1252420001d90310 */

const updateLight = (current) => {
    let lights = ['green', 'yellow', 'red'];
    return lights[lights.indexOf(current) + 1] || 'green';
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
