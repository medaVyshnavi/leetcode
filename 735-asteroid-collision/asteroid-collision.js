/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(nums) {
    let stack = [];
    
    for(let i =0; i<nums.length; i++){
        let alive = true;
        while(stack.length && nums[i] < 0 && stack[stack.length-1] > 0){
            if(Math.abs(nums[i]) > Math.abs(stack[stack.length-1])){
                stack.pop();
            }else if(Math.abs(nums[i]) === Math.abs(stack[stack.length-1])){
                stack.pop();
                alive = false;
                break;
            }else{
                alive = false;
                break;
            }
        }
        if(alive){
            stack.push(nums[i])
        }
    }
    return stack
};