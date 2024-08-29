/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);
    
    if(index === -1) {
        return word;
    }
    
    const prefix = word.slice(0, index + 1);
    const reverse = prefix.split("").reverse().join("");
    const suffix = word.slice(index + 1);
    
    return reverse + suffix;
};