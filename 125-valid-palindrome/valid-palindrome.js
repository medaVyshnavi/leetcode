/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let res = ""

    for(let i=0;i<s.length;i++){
        let char = s[i].charCodeAt(0);
        if(char >=48 && char <= 57){
            res+=s[i];
        } else if(char >=65 && char<=90){
            res+=s[i]
        } else if(char>=97 && char<=122) {
            res+=s[i]
        }
    }
    console.log(res)
    let i=0;
    let j=res.length-1;

    while(i < j){
        if(res[i] !== res[j]){
            return false
        }
        i++;
        j--;
    }
    return true
};