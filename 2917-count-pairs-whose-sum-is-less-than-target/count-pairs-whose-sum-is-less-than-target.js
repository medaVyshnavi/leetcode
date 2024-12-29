/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0 ;
    let i =0 ;
    let j=nums.length -1;

    let arr = nums.sort((a,b) => a-b);
    while(i< j){
        if((arr[i] + arr[j]) >= target){
            j--;
        }else{
            count = count + (j-i);
            i++
        }
    }
    return count
};