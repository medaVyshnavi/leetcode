/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let res = new Array(nums.length-1)
    let pos = nums.length-1

    while (i <= j) {
        let leftSquare = nums[i]*nums[i];
        let rightSquare = nums[j]*nums[j];

        if(leftSquare > rightSquare){
            res[pos] = leftSquare
            i++

        }else{
            res[pos] = rightSquare;
            j--
        }
        pos--
    }

    return res
};