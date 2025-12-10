/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i =0;
    let j=s.length-1;

    while(i < j){
        while(i < j && !isAlphanumeric(s[i])) i++;
        while(i < j && !isAlphanumeric(s[j])) j--;

        if(s[i].toLowerCase() !== s[j].toLowerCase()){
            return false
        }
        i++;
        j--;
    }
    return true;
    
};

function isAlphanumeric(c){
    let code = c.charCodeAt(0);
    if (code >= 48 && code <= 57) return true;
    if (code >= 65 && code <= 90) return true;
    if (code >= 97 && code <= 122) return true;
    return false;
}