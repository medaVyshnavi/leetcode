/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = ''
    let result = ''

    for (let i = 0; i<s.length ; i++){
        if(s[i] !== ' '){
            word = s[i]+word
        }else{
            result = result + word + ' '
            word = ''
            }
    }
    return result + word
};