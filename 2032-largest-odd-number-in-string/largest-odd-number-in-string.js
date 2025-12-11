/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let i=0;
    let j= num.length-1;
    while(i <= j){
        if(Number(num[j]) % 2 !== 0){
            return num.slice(i,j+1)
        }else{
            j--;
        }
    }
    return ""
};