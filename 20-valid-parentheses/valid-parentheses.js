/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            stack.push(s[i])
        } else{
            let front = stack.pop();
            if(!front || map[front] !== s[i] ){
                return false
            }
        }
    }
    if(stack.length !== 0) return false;
    return true;
};