/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
     let newNums = [...nums,...nums];
    let arr = Array(newNums.length).fill(0)
    let stack = [];

    for(let i=newNums.length-1;i>=0;i--){
        while(stack.length && newNums[i]>= newNums[stack[stack.length-1]]){
            stack.pop()
        }
        arr[i] = stack.length ? newNums[stack[stack.length - 1]] :-1
        stack.push(i)
    }
    return arr.slice(0,nums.length)
};