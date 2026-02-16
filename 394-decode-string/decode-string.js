/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
   let currentString = "";
   let currentNumber = 0;

   let stack = [];

   for(let i=0; i<s.length; i++){
        if(s[i] >= '0' && s[i] <= '9'){
            currentNumber = currentNumber * 10 + Number(s[i])
        }else if(s[i].charCodeAt(0) > 96 && s[i].charCodeAt(0) < 123){
            currentString+=s[i]
        }else if(s[i] === "["){
            stack.push([currentString,currentNumber]);
            currentString = "";
            currentNumber = 0;
        }else if(s[i] === "]"){
            let [char,number] = stack.pop();
            currentString = char + currentString.repeat(number)
        }
   }
   return currentString;
};