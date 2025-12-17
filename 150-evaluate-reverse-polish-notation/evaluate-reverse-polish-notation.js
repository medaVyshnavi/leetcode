/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
            let o1 = stack.pop();
            let o2 = stack.pop();
            let res = eval(`${(o2)} ${tokens[i]} ${(o1)}`)
            stack.push(Math.trunc(res))
        }
        else {
            stack.push(tokens[i])
        }
    }
    return Number(stack.pop())
};