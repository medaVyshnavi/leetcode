/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p =2;
    for(let i=2;i<nums.length;i++){
        if(nums[i] !== nums[p-2]){
            nums[p] = nums[i];
            p++
        }
    }
    return p
};