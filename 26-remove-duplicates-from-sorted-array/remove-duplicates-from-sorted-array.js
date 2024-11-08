/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i= 1;
    let j =1;

    while(i<=j && j<nums.length){
        if(nums[j] !== nums[j-1]){
            nums[i] = nums[j]
            i=i+1;
            j=j+1
        }
        else{
            j=j+1
        }
    }
    return i
};