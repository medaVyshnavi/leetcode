/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = '';
    for(let i=0;i<s.length;i++){
        if(isAlphaNumeric(s[i])){
            str+=s[i].toLowerCase()
        }
    }

    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!==str[j]){
            return false
        }
        i++;
        j--
    }
    return true
};


let isAlphaNumeric=(s) => {
    let regex = /^[A-Za-z0-9]+$/
    return regex.test(s)
}