/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(s[i] !== "+" && s[i] !== "-" && s[i] !== "*" && s[i] !== "/"){
            stack.push(Number(s[i]))
        } else{
            let a= stack.pop();
            let b= stack.pop();
    
            let res = 0;
            if(s[i] === "+") res= b+a;
            else if(s[i] === "-") res = b-a;
            else if(s[i] === "*") res= b*a;
            else if(s[i] === "/") res = Math.trunc(b/a);

            stack.push(res)
        }
    }

    return stack.pop()
};