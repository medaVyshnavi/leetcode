/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length-1;

    while(i <= j){
        let m = i +Math.floor((j -i)/2);
        if(nums[m] === target){
            return m;
        } else if(nums[m] < target){
            i = m + 1;
        } else{
            j = m - 1;
        }
    }
    return nums[j] > target ? j : j+1;
};