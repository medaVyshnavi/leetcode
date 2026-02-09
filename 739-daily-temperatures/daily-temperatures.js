/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(s) {
    let result = Array(s.length).fill(0);
    let stack = [];

    for(let i=0;i<s.length;i++){
        while(stack.length>0 && s[i] > s[stack[stack.length-1]]){
            let element = stack.pop();
            result[element] = i - element; 
        }
        stack.push(i)
    }
    return result
};