/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let j=0;

    while(j < strs[0].length){
        for(let i =1; i<strs.length ; i++){
            if(strs[i][j] !== strs[0][j] || j== strs[i].length){
                return prefix;
            }
        }
        prefix+= strs[0][j];
        j++;
    }
    return prefix;
};