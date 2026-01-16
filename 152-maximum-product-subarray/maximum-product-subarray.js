/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0];
    let maxProd = nums[0];
    let minProd = nums[0];

    for(let i = 1;i<nums.length;i++){
        let curr = nums[i];

        let tempMax = Math.max(curr, curr * maxProd, curr * minProd);
        let tempMin = Math.min(curr, curr * maxProd, curr * minProd);

        maxProd = tempMax 
        minProd = tempMin

        res = Math.max(res,maxProd)
    }
    return res;
};