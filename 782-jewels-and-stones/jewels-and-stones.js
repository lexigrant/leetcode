/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let j = jewels.split("")
    let s = stones.split("")
    let count = 0
    for(let i = 0; i < s.length; i++) {
        if(j.includes(s[i])){
            count += 1
        }
    }
    return count
};