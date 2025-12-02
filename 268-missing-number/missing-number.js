/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let xor = 0;
    for(let i=0;i< nums.length;i++){
        xor^=nums[i]
    }

    for(let i=1; i<= nums.length;i++){
        xor^= i;
    }

    return xor;
};