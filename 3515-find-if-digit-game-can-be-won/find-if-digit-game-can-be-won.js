/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
       let sumSingle = 0;
    let sumDouble = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 10) {
            sumSingle += nums[i]
        } else {
            sumDouble += nums[i]
        }
    }

    if (sumSingle === sumDouble) {
        return false;
    } else if (sumSingle > sumDouble) {
        return true;
    } else {
        return true;
    }
};