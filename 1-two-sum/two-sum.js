/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapp = new Map();
    for(let i =0;i<nums.length;i++){
        let more = target - nums[i]
        if(mapp.get(more) !== undefined){
            return [i,mapp.get(more)]
        }
        mapp.set(nums[i],i)
    }
};
