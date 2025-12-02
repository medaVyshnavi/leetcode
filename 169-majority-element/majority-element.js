/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        } else{
            map.set(nums[i],1)
        }
    }
    let count = 0;
    let maxElement = 0;
    for(let i=0;i<nums.length;i++){
       if(count < map.get(nums[i])){
        count = map.get(nums[i]);
        maxElement = nums[i]
       }
    }
    return maxElement;
};