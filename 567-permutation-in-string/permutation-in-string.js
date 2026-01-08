/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let need = {};

    for(let ch of s1){
        need[ch] = (need[ch] || 0) + 1
    }

    let left = 0;
    let right = 0;
    let window = {};
    let matches = 0;
    let required = Object.keys(need).length;

    while(right < s2.length){
        let char = s2[right];
        window[char] = (window[char] || 0) + 1;
        if(need[char] && need[char] === window[char]){
            matches++;
        }
        right++;

        if(right-left > s1.length){
            let ch = s2[left];
            if(need[ch] && need[ch] === window[ch]){
                matches--;
            }
            window[ch]--
            if(window[ch] === 0) {
                delete window[ch];
            }
            left++
        }

        if(right - left === s1.length && matches === required) return true;
    }
    return false;
};