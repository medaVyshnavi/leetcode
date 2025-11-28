/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [];
    let n = nums.length;
    k = k % nums.length

    for(let i=0;i<n-k;i++){
        temp[i] = nums[i]
    }

    for(let i = n-k;i<n;i++){
        nums[i-(n-k)] = nums[i]
    }

    for(let i =k ;i<n ; i++){
        nums[i] = temp[i-k]
    }
    return nums
};