/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let startIndex = 0
    let endIndex = 0
    let sum = 0;
    let totalSum = -Infinity;

    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i];
        if(sum > totalSum){
            endIndex = i;
        }
        totalSum = Math.max(totalSum,sum)
        if(sum < 0){
            sum = 0;
            startIndex = i+1;
            endIndex = i+1;
        }
    }
    console.log(startIndex,endIndex)
    return totalSum
};