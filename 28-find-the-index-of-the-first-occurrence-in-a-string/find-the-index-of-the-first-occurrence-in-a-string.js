/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let m = haystack.length
    let n = needle.length
    
    if(n === 0) return 0;
    if(n > m ) return -1

    let i =0
    while(i<=m-n){
        if(haystack[i] === needle[0]){
            let match = true
            for(let j=0;j<n;j++){
                if(haystack[i+j] !==needle[j]){
                    match = false
                    break
                }
            }
            if(match === true) return i
        }
       i++
    }
    return -1
};