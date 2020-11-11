"use strict";
// add whatever parameters you deem necessary
/* 
 * function takes in an array of keys and an array of values
 * it returns an object created from the keys and values
 * if the number of keys are > number of values, the remaining keys should map to null
 * if number of values > number of keys, ignore them
 * 
 * we assume all keys are unique, so values arent replaced
 */
function twoArrayObject(keysArr, valuesArr) {
    // loop through every index of the keys array
    // grab the corresponding value at that index
    // for indices that are longer than the values arr, the key-value pair is just null
    let keyValObj = {};
    for (let i = 0; i < keysArr.length; i++) {
        const key = keysArr[i];
        const val = valuesArr[i] || null;
        keyValObj[key] = val;
    }
    return keyValObj;
}
