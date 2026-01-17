/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let res = [];
    for(let i = 0;i<s.length;i++){
        if(i % 2 === 0 ){
            res.push(s[i])
        } else {
            res.push(shift(s[i-1],s[i]))
        }   
    }
    return res.join("");
};

function shift(char,digit){
    let val = char.charCodeAt(0) - 97 + Number(digit);
    return (String.fromCharCode(val + 97));
}