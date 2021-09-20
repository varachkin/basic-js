import {NotImplementedError} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let nameArr = [];
    let nameStr = "";
    if (Array.isArray(arr)) {
        arr.find(function (item) {

            if (typeof (item) === "string") {
                item = item.split(" ").join("");
                nameArr.push(item[0].toUpperCase());
            }
        });
        if (nameArr !== []) {
            nameArr = nameArr.sort();
            for (let i = 0; i < nameArr.length; i++) {
                nameStr += nameArr[i];
            }
            return nameStr;
        } else {
            console.log(false);
            return false;
        }
    } else {
        return false;
    }

}
