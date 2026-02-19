/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let number = 0;
    let result = 0;
    let stack = [];
    let sign = 1;

    for(let i = 0;i<s.length;i++){
        if(s[i] >= "0" && s[i] <= "9"){
            number = number * 10 + Number(s[i]);
        }else if(s[i] === "+"){
            result = result + (sign * number);
            number = 0;
            sign = 1;
        }else if(s[i] === "-"){
            result = result + (sign * number);
            number = 0;
            sign = -1;
        }else if(s[i] === "("){
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        }else if(s[i] == ")"){
            result = result + (sign * number);
            number = 0;
            let prevSign = stack.pop();
            let prevResult = stack.pop();
            result = prevResult + (prevSign * result)
        }
    }
    result = result + (sign * number);
    return result;
};