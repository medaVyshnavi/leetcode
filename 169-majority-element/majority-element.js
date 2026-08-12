/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // O(1) time complexity and space complexity
    let candidate = nums[0];
    let votes = 0;
    for(let i=0;i<nums.length;i++){
        if(candidate === nums[i]){
            votes++
        }else(
            votes--
        )
        if(votes == 0){
            votes = 0;
            candidate = nums[i+1]
        }
    }
    return candidate


    // o(1) Time complexity and o(n) space complexity because we are using Map
    // let map = new Map();
    // for(let i=0;i<nums.length;i++){
    //     if(!map.get(nums[i])){
    //         map.set(nums[i],1)
    //     }else{
    //         map.set(nums[i],map.get(nums[i])+1)
    //     }
    // }

    // for(let i=0;i<nums.length;i++){
    //     if(map.get(nums[i]) > Math.floor(nums.length/2)){
    //         return nums[i]
    //     }
    // }
};