/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(s) {
    let ans = Array(s.length).fill(0);
    let stack = [];

    for(let i=0; i < s.length;i++){
        while(stack.length > 0 && s[i] > s[stack[stack.length-1]]){
            let element = stack.pop();
            ans[element] = i - element;
        }
        stack.push(i)
    }
    return ans
};