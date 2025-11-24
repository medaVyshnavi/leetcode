/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i= s.length-1 ;
    for(let j=0; j< s.length /2 ; j++){
        [s[i],s[j]] = [s[j],s[i]]
        i--;
    }
};