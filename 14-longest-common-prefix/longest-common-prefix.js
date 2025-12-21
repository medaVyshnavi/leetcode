/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ref = strs[0];
    let i=0;
    let res= "";

    while(i < ref.length){
        for(let j=0;j<strs.length;j++){
            if(strs[j][i] !== ref[i]){
                return res;
            }
        }
        res+=ref[i];
        i++
    }
    return res;
};