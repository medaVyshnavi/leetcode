/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return "";
    let need = {};
    let required = 0;
    for(let ch of t){
        need[ch] = (need[ch] || 0)+1;
    }
    required = Object.keys(need).length;

    let i = 0;
    let j= 0;
    let satisfied = 0;
    let window = {};
    let start = 0;
    let minLen = Infinity

    while(j < s.length){
        let ch = s[j];
        window[ch] = (window[ch] || 0)+1;
        if(need[ch] && window[ch] === need[ch]){
            satisfied++;
        }
        
        while(satisfied === required){
            if(j - i +1 < minLen){
                minLen = j-i+1;
                start = i
            }
            let c = s[i];
            if(need[c] && window[c] === need[c]){
                satisfied--;
            }
            window[c]--;
            if(window[c] ===0) {delete window[c]}
            i++
        }
        j++;
    }
    return minLen === Infinity ? "" : s.substring(start,start+minLen)
};