/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let val = target - nums[i];
        if(map.has(val)){
            return [map.get(val), i]
        }
        map.set(nums[i],i)
    }



    // for(let i=0;i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         let val = target - nums[j];
    //         if(val === nums[i]){
    //             return [i,j]
    //         }
    //     }
    // }
};