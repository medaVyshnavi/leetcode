/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i =0;
    let j=0;

    while(j < nums.length){
        if (nums[j] === 0) {
            j++
        }else{
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++
            j++
        }
    }
};