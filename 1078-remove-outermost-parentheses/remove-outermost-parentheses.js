/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = "";
    let count = 0;

    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            if(count > 0){
                res+=s[i]
            }
            count++
        } else {
            count--;
            if(count > 0){
                res+=s[i];
            }
        }
    }
    return res
};