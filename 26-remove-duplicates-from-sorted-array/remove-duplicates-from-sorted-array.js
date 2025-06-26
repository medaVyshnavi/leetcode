/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i= 0;
    let j=0;

    while(i<=j && j<nums.length){
        if(nums[j] === nums[j-1]){
            j++
        }else{
            nums[i] = nums[j];
            i++;
            j++
        }
    }
    return i;
};