/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr = [];
    for(let i = 0; i < sentences.length; i++) {
        let words = sentences[i].split(" ");
        let length = words.length
        arr.push(length)
    }
    return Math.max(...arr)
};