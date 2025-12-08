/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(s, x) {
    let res = [];
    for(let i =0;i<s.length;i++){
        let word = s[i];
        let j =0;
        while(j < word.length){
            if(word[j] == x){
                res.push(i);
                break;
            }
            j++;
        }
    }
    return res;


    // 1. builtin method
    // let res= [];
    // for(let i=0;i<s.length;i++){
    //     if(s[i].includes(x)){
    //         res.push(i);
    //     }
    // }
    // return res;
};