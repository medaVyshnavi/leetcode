/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;

    for(const n of nums){
        count = n === 1 ? count+1 : 0;
        maxCount = Math.max(count,maxCount);
    }

    return maxCount;
};