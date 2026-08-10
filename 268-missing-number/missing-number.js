/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let msum = 0;

    for(let i=0;i<nums.length+1;i++){
        sum+=i
    }
    for(let i=0;i<nums.length;i++){
        msum+=nums[i]
    }
    return sum-msum;
};