/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < k) {
            sum += 1
        }
    }
    return sum
};