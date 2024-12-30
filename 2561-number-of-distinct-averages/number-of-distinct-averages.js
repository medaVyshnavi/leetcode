/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let arr = nums.sort((a,b) => a-b)
    let i=0,j=arr.length-1;
    let count = new Set()

    while(i<j){
        let avg = (arr[i]+arr[j])/2
        count.add(avg)
        i++;
        j--
    }
    return count.size
};