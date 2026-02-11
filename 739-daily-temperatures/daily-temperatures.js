/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack = [];
    let res = Array(temp.length).fill(0);
    for(let i=0; i< temp.length;i++){
        while(stack.length && temp[i] > temp[stack[stack.length-1]]){
            let idx = stack.pop();
            res[idx] = i-idx
        }
        stack.push(i)
    }
    return res;
};