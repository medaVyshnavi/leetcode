/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let totalSum = -Infinity;

    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i];
        totalSum = Math.max(totalSum,sum)
        if(sum < 0){
            sum = 0;
        }
    }
    return totalSum
};