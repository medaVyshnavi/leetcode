/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let brackets = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    for(let char of s){
        if(brackets[char]){
            stack.push(char)
        }else{
            let element = stack.pop();
            if(brackets[element] !== char) return false
        }
    }
    return stack.length === 0;
};