import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let cat = 0;
    const Z = "^^";
    arr.forEach(function (item) {
        item.forEach(function (i) {
            if (i === Z) {
                cat++;
            }
        });
    });
    return cat;
}
