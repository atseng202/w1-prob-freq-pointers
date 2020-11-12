"use strict";

/* 
function takes in an array of integers and returns the same array with positive numbers on the left and negative on the right. 
The positive and negative numbers will not necessarily be sorted.
We are assuming there are no zeros in input array.
*/ 
function separatePositive(nums) {
    let negativePtr = 0;
    let positivePtr = nums.length -1;

    while (negativePtr < positivePtr) {
        // if the value on the left side is negative, swap with the value on the right Ptr and move right Ptr one to the left. 
        if (nums[negativePtr] < 0) {
            [nums[negativePtr], nums[positivePtr]] = [nums[positivePtr], nums[negativePtr]];
            positivePtr --; 
        }
        // otherwise, move left Ptr one to the right.
        else {
            negativePtr ++;
        }
    }
    return nums;
}
