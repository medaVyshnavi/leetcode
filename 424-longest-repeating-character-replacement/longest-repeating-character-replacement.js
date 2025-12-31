/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i = 0;
    let j = 0;
    let maxFreq = 0;
    let map = new Map();
    let maxLength = 0;

    while(j < s.length){
        let c = s[j];
        if(map.has(c)){
            map.set(c , map.get(c) +1)
        } else{
            map.set(c, 1)
        }

        maxFreq = Math.max(maxFreq, map.get(c));
        while(j-i+1-maxFreq > k){
            map.set(s[i] , map.get(s[i]) -1)
            i++
        }
        maxLength = Math.max(maxLength, j-i+1);
        j++
    }
    return maxLength;
};