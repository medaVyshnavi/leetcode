/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 0;

    for(const n of nums){
        if(count === 0){
            candidate = n
        }
        count = candidate === n ? count+1 : count-1;
        
    }
    return candidate

    // 0(n) time and space complexity
    // let limit = Math.floor(nums.length/2);
    // let hashMap = {};

    // for(let i=0; i<nums.length;i++){
    //     if(!hashMap[nums[i]]){
    //         hashMap[nums[i]] = 1;
    //     }else{
    //         hashMap[nums[i]]++;
    //     }
    // }

    // for(let i=0;i<nums.length;i++){
    //     if(hashMap[nums[i]] > limit){
    //         return nums[i]
    //     }
    // }
};