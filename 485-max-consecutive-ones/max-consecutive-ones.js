/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let occurances = 0;
    let maxOcc = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            occurances++;
        }else{
            maxOcc = Math.max(maxOcc,occurances)
            occurances = 0;
        }
    }
    return Math.max(maxOcc,occurances)
};