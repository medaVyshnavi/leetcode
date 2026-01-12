/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let need = {}
    for(let ch of t){
        need[ch] = (need[ch] || 0) + 1;
    }
    let required = Object.keys(need).length;
    let window = {}
    let i = 0;
    let j = 0;
    let start = 0;
    let minLen = Infinity;
    let matched = 0;

    while(j < s.length){
        let ch = s[j];
        window[ch] = (window[ch] || 0 ) + 1;
        if(need[ch] && window[ch] === need[ch]){
            matched++
        }

        while(matched === required){
            if(j - i + 1 < minLen){
                minLen = j-i+1;
                start = i
            }
            let c = s[i];
            if(need[c] && window[c] === need[c]){
                matched--;
            }
            window[c]--;
            if(window[c] === 0) delete window[c]
            i++;
        }
        j++;
    }

    return minLen === Infinity ? "" : s.substring(start,start+minLen)
};