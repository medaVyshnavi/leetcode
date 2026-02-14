/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(stack.length && stack[stack.length-1][0] === s[i]){
            stack[stack.length-1][1]++
            if(stack[stack.length-1][1] === k){
                stack.pop();
            }
        }
        else{
            stack.push([s[i],1])
        }
    }
    let res = [];
    for(let x of stack){
        for(let i=0 ; i< x[1];i++){
            res.push(x[0])
        }
    }
    return res.join("")
};