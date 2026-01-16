/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let res= [];
    res[nums.length-1] = 0;

    for(let i = nums.length-2;i>=0;i--){
        res[i] = res[i+1]+nums[i+1];
    }

    let prefix = 0;
    if(res[0] === 0){
        return 0
    }

    for(let i =1;i<nums.length;i++){
        prefix = prefix + nums[i-1];
        if(prefix === res[i]){
            return i
        }
    }
    return -1;
};