/**
 * Return the next light color.
 *
 * @param {string} light - The current light color
 * @returns {string} The next light color.
 */

export const updateLight = (light) => {
    const lights = {
        green: 'yellow',
        yellow: 'red',
        red: 'green',
    };

    return lights[light] ? lights[light] : 'green';
};
