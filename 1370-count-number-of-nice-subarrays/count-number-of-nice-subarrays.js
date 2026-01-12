/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    return helper(nums,k) - helper(nums,k-1);
};

function helper(nums,k){
    let i = 0;
    let j = 0;
    let count = 0
    let odd = 0;
    
    while(j < nums.length){
        if(nums[j] % 2 === 1){
            odd++
        }

        while(odd > k){
            if(nums[i] % 2 === 1){
                odd--
            }
            i++
        }
        count = count + j - i + 1;
        j++
    }
    return count;
}