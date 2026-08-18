/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let i = 0;
    for(let j=0;j<nums.length;j++){
        if(nums[j] % 2 == 0){
            [nums[j],nums[i]] =  [nums[i],nums[j]];
            i++
        }
    }
    return nums
};