/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i = 0;
    let j = 0;
    let count = 0;
    let max = 0;

    while(j < nums.length){
        if(nums[j] == 0){
            count++
        }
        j++;
        while(count > k){
            if(nums[i] == 0){
                count--;
            }
            i++;
        }
        max = Math.max(max, j-i+1)
    }
    return max-1
};