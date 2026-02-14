/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(stack.length){
            if(stack[stack.length-1][0] !== s[i]){
                stack.push([s[i],1])
            }else{
                let [val,count] = stack.pop();
                count++;
                if(count !== k){
                    stack.push([s[i] , count])
                }
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