/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = "";
    let counter = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            counter++
            if(counter > 1){
                res+=s[i]
            }
        }else{
            if(counter > 1){
                res+=s[i]
            }
            counter--;
        }
    }
    return res;
};