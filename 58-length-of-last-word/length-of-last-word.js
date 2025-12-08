/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let i = s.length-1;
    while(s[i] === " "){
        i--;
    }
    while(s[i] !== " " && i>=0){
        count++;
        i--;
    }
    return count;


    // s= s.trim();
    // s = s.split(" ");
    // return s[s.length-1].length;
};