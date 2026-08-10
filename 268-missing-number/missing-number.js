/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let value = 0;

    for(let i=0;i<nums.length+1;i++){
        value = value ^ i
    }
    for(let i=0;i<nums.length;i++){
        value = value ^ nums[i]
    }
    return value
};