/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (s) {
    let res = [];
    let stack = [];

    for (let i = s.length - 1; i >= 0; i--) {
        while (stack.length) {
            if (s[i] >= stack[stack.length - 1][0]) {
                stack.pop();
            } else {
                res[i] = stack[stack.length - 1][1] - i
                stack.push([s[i], i]);
                break;
            }
        }
        if (!stack.length) {
            res[i] = 0
            stack.push([s[i], i])
        }
    }
    return res;
};