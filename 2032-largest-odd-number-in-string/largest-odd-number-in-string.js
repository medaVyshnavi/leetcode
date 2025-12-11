/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let j= num.length-1;
    while(j >= 0){
        if(Number(num[j]) % 2 !== 0){
            return num.substring(0,j+1)
        }
        j--;
    }
    return ""
};