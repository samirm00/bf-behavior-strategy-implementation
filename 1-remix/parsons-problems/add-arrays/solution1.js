/**
 * Add arrays item.
 *
 * @param {any[]} arr1 - The first array to add.
 * @param {any[]} arr2 - The second array to add.
 * @returns {any[]} A new array where each item is the sum of the items from arr1 and arr1.
 */

export const addArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        throw new Error('arrays have a different length');
    }
    const resultArr = [];
    for (let i = 0; i < arr1.length; i++) {
        resultArr.push(arr1[i] + arr2[i]);
    }

    return resultArr;
};
