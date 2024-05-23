/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr = [];
    let count = 0;
    for(let i = 0; i < sentences.length; i++) {
        let words = sentences[i].split(" ");
        let length = words.length
        arr.push(length)
    }
    return Math.max(...arr)
};