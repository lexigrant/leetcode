/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    let x = num.toString().split("").map(Number)
    for(let i = 0; i < x.length; i++) {
       if(num % x[i] == 0) {
           count += 1
       }
    }
    return count
};