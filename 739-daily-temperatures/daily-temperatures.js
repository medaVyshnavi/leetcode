/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (s) {
    let res = [];
    let stack = [];

    for (let i = s.length - 1; i >= 0; i--) {
        while (stack.length) {
            if (s[i] >= s[stack[stack.length - 1]]) {
                stack.pop();
            } else {
                res[i] = stack[stack.length - 1] - i
                stack.push(i);
                break;
            }
        }
        if (!stack.length) {
            res[i] = 0
            stack.push(i)
        }
    }
    return res;
};