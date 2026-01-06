/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(nums) {
    let i=0;
    let j= nums.length-1;
    let max =0;
    while(i < j){
        let area = Math.min(nums[i], nums[j]) * (j-i);
        max = Math.max(max,area);
        if(nums[i] > nums[j]){
            j--;
        }else{
            i++;
        }
    }
    return max;
};