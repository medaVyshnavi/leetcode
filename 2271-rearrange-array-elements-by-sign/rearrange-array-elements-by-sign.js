/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let j =0 ;
    let k =1 ;
    let newArr = [];

    for(let i =0 ; i<nums.length;i++){
        if(nums[i] > 0 ){
            newArr[j] = nums[i]
            j=j+2
        }
        else{
            newArr[k] = nums[i]
            k = k+2
        }
    }
    return newArr
};