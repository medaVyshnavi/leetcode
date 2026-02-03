/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    stack.push(s[0])
    for(let i=1;i<s.length;i++){
        if(stack[stack.length-1] !== s[i]){
            stack.push(s[i])
        }else{
            stack.pop()
        }
    }
    let res = ""
    for(let i =0;i<stack.length;i++){
        res+=stack[i]
    }
    return res;
};