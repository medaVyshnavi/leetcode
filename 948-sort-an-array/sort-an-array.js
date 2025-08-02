/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <=1) return nums
    let mid = Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid))
    return mergeArray(left,right)
};

function mergeArray(left,right){
    let i=0;
    let j=0;
    let array = []
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            array.push(left[i])
            i++
        }else{
            array.push(right[j])
            j++
        }
    }
    return [...array,...left.slice(i),...right.slice(j)]
}