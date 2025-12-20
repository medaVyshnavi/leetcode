/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let arr = Array(nums.length).fill(-1)
    let stack = [];
    let n = nums.length;

    for(let i=(2*n)-1;i>=0;i--){
        while(stack.length && nums[i%n]>= nums[stack[stack.length-1]]){
            stack.pop()
        }
        arr[i%n] = stack.length ? nums[stack[stack.length - 1]] :-1
        stack.push(i%n)
    }
    return arr
};