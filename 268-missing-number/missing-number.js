/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let xor =0 ;

    for(let i=0;i<=nums.length; i++){
        xor = xor ^ i
    }

    for(const n of nums){
        xor = xor ^ n;
    }

    return xor;
};