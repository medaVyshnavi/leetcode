/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let k = 1;
    let i = 0;
    let j = 0;
    let count = 0;
    let mistake = 0;
    let maxCount = 0;

    while(j < nums.length){
        if(nums[j] === 0){
            mistake++
        }else{
            count++
        }

        while(mistake > k){
            if(nums[i] == 0){
                mistake--;
            }else{
                count--;
            }
            i++
        }
        maxCount = Math.max(count,maxCount)
        j++
    }
    return mistake === 0 ? nums.length-1 : maxCount;
};