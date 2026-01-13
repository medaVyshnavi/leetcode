/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sArray = Array(26).fill(0);
    for(let ch of s){
        sArray[ch.charCodeAt(0)-97]++;
    }

    let tArray = Array(26).fill(0);
    for(let ch of t){
        tArray[ch.charCodeAt(0)-97]++;
    }

    for(let i =0; i < tArray.length; i++){
        if(sArray[i] !== tArray[i]){
            return String.fromCharCode(i+97)
        }
    }
};