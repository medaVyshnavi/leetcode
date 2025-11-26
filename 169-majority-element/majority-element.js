/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let limit = Math.floor(nums.length/2);
    let hashMap = {};

    for(let i=0; i<nums.length;i++){
        if(!hashMap[nums[i]]){
            hashMap[nums[i]] = 1;
        }else{
            hashMap[nums[i]]++;
        }
    }

    for(let i=0;i<nums.length;i++){
        if(hashMap[nums[i]] > limit){
            return nums[i]
        }
    }
    
};