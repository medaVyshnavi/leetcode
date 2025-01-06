/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let i =0;
    let j =nums.length-1
    let concat = 0

    while(i<=j){
        if(i===j){
            concat +=nums[i]
        }else{
           let res = nums[i].toString() + nums[j]
            concat += Number(res)
        }
        i++;
        j--
        
    }
    return concat
};