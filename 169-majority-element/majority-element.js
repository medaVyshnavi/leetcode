/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count=0;
    let el =0;

    for(let i =0;i< nums.length;i++){
        if(count == 0){
            el = nums[i];
            count=1
        }
        else if(nums[i] == el){
            count++
        }else{
            count--
        }
    }
    let ctr = 0
    for(let i =0;i<nums.length;i++){
        if(el == nums[i]){
            ctr++
        }
    }
    if(ctr>Math.floor(nums.length/2)) return el
    return -1
};