/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let res = [];
    for(let i =1;i<s.length;i=i+2){
        res.push(shift(s[i-1],s[i],s)) 
    }
    if(s.length % 2 !==0){
        res.push(s[s.length-1])
    }
    return res.join("");
};

function shift(char,digit,s){
    let val = char.charCodeAt(0) - 97 + Number(digit);
    return (char + String.fromCharCode(val + 97));
}