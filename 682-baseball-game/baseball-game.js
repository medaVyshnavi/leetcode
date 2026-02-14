/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(nums) {
    let stack = [];

    for(let i=0;i<nums.length;i++){
        if(nums[i] === "C"){
            stack.pop();
        }else if(nums[i] == "D"){
            let val = stack[stack.length-1];
            stack.push(2*Number(val));
        }else if(nums[i] == "+"){
            let total = stack[stack.length-1] + stack[stack.length-2];
            stack.push(total)
        }else{
            stack.push(Number(nums[i]))
        }
    }

    let sum = 0;
    for(let x of stack){
        sum = sum + x
    }
    return sum
};