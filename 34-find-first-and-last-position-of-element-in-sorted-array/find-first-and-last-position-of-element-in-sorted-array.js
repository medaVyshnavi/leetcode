/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1,-1]

    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let mid = left + Math.floor((right - left)/2);
        if(nums[mid] >= target){
            right = mid;
        }else{
            left = mid+1;
        }
    }
    res[0] = left;
    if(nums[res[0]] !== target) return [-1,-1];

    left = 0;
    right = nums.length;

    while(left < right){
        let mid = left + Math.floor((right - left)/2);
        if(nums[mid] > target){
            right = mid
        }else{
            left = mid +1
        }
    }
    res[1] = left-1;
    return  res
    
};