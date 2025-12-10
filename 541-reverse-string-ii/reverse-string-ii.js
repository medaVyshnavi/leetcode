/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if(s.length < k) return s.split("").reverse().join("");

    let m = 0;
    let i=0;
    let j = k-1;
    s = s.split("")
    while(j < s.length){
        while(i < j){
            [s[i],s[j]] = [s[j],s[i]];
            i++;
            j--;
        }
        m = m+( 2 *k);
        i = m ;
        j = m + k-1;
    }
    if(i<s.length && j>s.length){
        j = s.length-1;
        while(i < j){
            [s[i],s[j]] = [s[j],s[i]];
            i++;
            j--;
        }
    }
    return s.join("");
};