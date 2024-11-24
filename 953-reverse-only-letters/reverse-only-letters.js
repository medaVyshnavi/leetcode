/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let i=0;
    let j= s.length-1
    let arr = s.split('')

    while(i <j){
        if(/[^A-Za-z]/.test(arr[i])){
            i++
        }
        else if(/[^A-Za-z]/.test(arr[j])){
            j--
        }
        else{
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++
            j--
        }
    }
    return s = arr.join('')
};