/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = [];
    
    for(let i = 0; i < s.length; i++) {
        result[indices[i]] = s.charAt(i);
    }
    
    return result.join('');
};