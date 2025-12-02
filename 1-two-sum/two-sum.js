/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        let element = target - nums[i];
        for(let j=0; j<nums.length;j++){
            if(element === nums[j] && i!==j){
                return [i,j]
            }
        }
    }
};