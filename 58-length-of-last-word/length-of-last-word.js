/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let i = s.length-1;

    while(i >=0){
        if(s[i] !== " "){
            count++
        }
        else if(count>0){
            break;
        }
        i--;
    }
    return count;

    // approach 2
    // let count = 0;
    // let i = s.length-1;
    // while(s[i] === " "){
    //     i--;
    // }
    // while(s[i] !== " " && i>=0){
    //     count++;
    //     i--;
    // }
    // return count;

    // 1. using built in methods limited to javascript.
    // s= s.trim();
    // s = s.split(" ");
    // return s[s.length-1].length;
};