/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix= "";
    let j=0;

    while(j < strs[0].length){
        for(let i=1; i<strs.length;i++){
            if(strs[i-1][j] !== strs[i][j]){
                return prefix;
            }
        }
        prefix = prefix + strs[0][j];
        j++;
    }
    return prefix;
};