/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let val = target - nums[j];
            if(val === nums[i]){
                return [i,j]
            }
        }
    }
};