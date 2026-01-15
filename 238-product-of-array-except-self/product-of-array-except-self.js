/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = Array(nums.length).fill(0);
    let prefix = 1;
    let suffix = 1;

    for(let i = 0;i<nums.length;i++){
        res[i] = prefix;
        prefix = prefix *nums[i];
    }

    for(let i=nums.length-1;i>=0;i--){
        res[i] = res[i] * suffix;
        suffix = suffix * nums[i]
    }

    return res;
};