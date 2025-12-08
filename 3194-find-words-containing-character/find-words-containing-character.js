/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(s, x) {
    let res= [];
    for(let i=0;i<s.length;i++){
        if(s[i].includes(x)){
            res.push(i);
        }
    }
    return res;
};