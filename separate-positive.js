"use strict"

/* 
function takes in an array of integers and returns the same array with positive numbers on the left and negative on the right. 
The positive and negative numbers will not necessarily be sorted.
We are assuming there are no zeros in input array.
*/ 
function separatePositive(nums) {
    let negativePointer = 0;
    let positivePointer = nums.length -1;

    while (negativePointer < positivePointer) {
        // if the value on the left side is negative, swap with the value on the right pointer and move right pointer one to the left. 
        if (nums[negativePointer] < 0) {
            [nums[negativePointer], nums[positivePointer]] = [nums[positivePointer], nums[negativePointer]];
            positivePointer --; 
        }
        // otherwise, move left pointer one to the right.
        else {
            negativePointer ++;
        }
    }
    return nums;
}
