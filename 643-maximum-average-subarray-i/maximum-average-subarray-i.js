/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let maxSum = -Infinity;

    for(let i=0;i<k;i++){
        sum+=nums[i]
    };
    maxSum = Math.max(sum,maxSum);

    for(let i=1; i<nums.length-k+1;i++){
        sum = sum - nums[i-1] + nums[i+k-1];
        maxSum = Math.max(sum,maxSum)
    }
    
    return maxSum / k;
};