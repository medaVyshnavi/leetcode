/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(nums) {
    let stack = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i] === "+"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b+a)
        }else if(nums[i] === "-"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b-a)
        }else if(nums[i] === "*"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b*a)
        }else if(nums[i] === "/"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc(b/a))
        }else{
            stack.push(Number(nums[i]))
        }
    }
    return stack[0]
};