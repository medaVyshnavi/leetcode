/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = Array(nums.length).fill(0);
    for(let i =0; i<nums.length;i++){
        res[nums[i]-1]++;
    }
    nums = [];
    for(let i =0;i<res.length;i++){
        if(res[i]== 0){
            nums.push(i+1)
        }
    }
    return nums
};

// o(n) -> TC and SC