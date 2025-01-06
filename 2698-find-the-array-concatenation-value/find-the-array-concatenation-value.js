/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let i =0;
    let j =nums.length-1
    let concat = 0

    while(i<=j){
        concat += i===j ? nums[i] : Number(`${nums[i]}${nums[j]}`)
        i++;
        j--
        
    }
    return concat
};