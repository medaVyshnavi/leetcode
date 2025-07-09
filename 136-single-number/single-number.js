/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    for(let i=0;i<nums.length;i++){
        result ^= nums[i]
    }
    return result;


    // let hashMap = {};
    // for(let i =0;i<nums.length;i++){
    //     if(!hashMap[nums[i]]){
    //         hashMap[nums[i]] = 1;
    //     }else{
    //         hashMap[nums[i]]++;
    //     }
    // }

    // for(let i =0;i<nums.length;i++){
    //      if(hashMap[nums[i]] == 1){
    //         return nums[i]
    //     }
    // }
};