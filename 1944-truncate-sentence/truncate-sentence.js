/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
   const sentence = s.split(" ");
    const first = sentence.splice(0, k);
    
   return first.join(" ")
};