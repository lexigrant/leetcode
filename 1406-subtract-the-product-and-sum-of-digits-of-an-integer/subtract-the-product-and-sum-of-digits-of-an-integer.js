/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    let nums = n.toString().split("").map(Number)
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        product *= nums[i];
    }
   return product - sum
};