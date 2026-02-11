/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let res = Array(nums.length).fill(-1);
    let n = nums.length;

    for(let i = 0; i< (2*n)-1 ; i++){
        while(stack.length && nums[i%n] > nums[stack[stack.length-1]]){
            let idx = stack.pop();
            res[idx] = nums[i%n];
        }
        stack.push(i%n)
    }
    return res;
};