"use strict";

// add whatever parameters you deem necessary

/* 
Function accepts a sorted array of integers and average and returns a Boolean if you can calculate average from a pair of integers in array.
*/ 
function averagePair(nums, targetAvg) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let checkAvg = (nums[low] + nums[high]) / 2;
        if (checkAvg === targetAvg) return true;
        if (checkAvg > targetAvg) {
            high --;
        }
        else if (checkAvg < targetAvg) {
            low ++;
        }
    }
    return false;
}
