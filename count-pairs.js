// add whatever parameters you deem necessary
/* 
 * function gives an array of integers and a target integer
 * returns: an integer representing the number of pairs that sum to the target
 * assumes: integers are unique
 */

 // O(nlogn) solution:
 // we sort the array, use a left and right pointer, and then use sliding window to check if they sum to our target
 // so if our sum is too large then decrement right pointer; vice versa for sum too small, increment left pointer
 // if the sum was found, we increment left, decrement right

 // O(n) solution:
function countPairs(integersArr, target) {
    // use a set to track all the numbers available to us
    // iterate through our integers after and check if the target - current integer exists in our Set
    const intSet = new Set(integersArr);
    let totalPairs = 0;

    for (let num of integersArr) {
        const possiblePair = target - num;
        if (possiblePair !== num  && intSet.has(possiblePair)) {
            totalPairs ++;
        }
    }

    // to remove double counting pairs
    return totalPairs / 2;
}
