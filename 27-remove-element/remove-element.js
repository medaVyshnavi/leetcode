/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0 ;
    let j= 0;

    while(j<nums.length){
        if(nums[j] !== val){
            nums[i] = nums[j]
            i++;
            j++
        }else{
            j++
        }
    }
    console.log(i)
    return i
};