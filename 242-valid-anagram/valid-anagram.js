/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sArray = new Array(26).fill(0);
    for(let ch of s){
        let index = ch.charCodeAt(0) - 97;
        sArray[index]++;
    }
    let sString = sArray.join("#");

    let tArray = new Array(26).fill(0);
    for(let ch of t){
        let index = ch.charCodeAt(0) - 97;
        tArray[index]++;
    }
    let tString = tArray.join("#");

    return sString === tString  

};