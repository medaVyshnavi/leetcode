/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let m = left + Math.floor((right-left)/2);
        if( nums[m+1] > nums[m]){
            left = m+1;
        }else{
            right = m ;
        }
    }
    return left;
};