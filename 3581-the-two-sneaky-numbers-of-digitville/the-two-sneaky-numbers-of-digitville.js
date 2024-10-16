/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let seen = [];
    let doubles = [];
  
    for( let i = 0; i < nums.length; i++) {
        if(!seen.includes(nums[i])) {
            seen.push(nums[i]);
        } else {
            doubles.push(nums[i]);
        }
    }
    
    return doubles;
};