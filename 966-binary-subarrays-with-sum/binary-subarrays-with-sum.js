/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    if(goal <= 0){
        return helper(nums,goal)
    }
    return helper(nums,goal) - helper(nums,goal-1)
};

function helper(nums,goal){
    let i = 0;
    let j= 0 ;
    let sum = 0;
    let count = 0;

    while(j < nums.length){
        sum = sum+nums[j];

        while(sum > goal){
            sum = sum-nums[i];
            i++
        }
        count = count + j -i +1;
        j++

    }
    return count;
}