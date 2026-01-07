/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length-1;
    let res = [];
    let k = nums.length-1;

    while(i <= j){
        if(nums[i]**2 > nums[j]**2){
            res[k] = nums[i]**2;
            i++;
        } else{
            res[k] = nums[j]**2;
            j--;
        }
        k--
    }
    return res
};