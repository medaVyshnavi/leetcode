/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(s) {
    let res = Array(s.length).fill(0);
    let stack = [];

    for(let i=s.length-1;i>=0;i--){
        while(s.length && s[i] >= s[stack[stack.length-1]]){
            stack.pop();
        }
        let top = stack[stack.length-1]
        stack.push(i)
        res[i] = top ? top-i : 0;
    }
    return res;

};