/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let need = {};
    for(let ch of p){
        need[ch] = (need[ch] || 0) +1;
    }
    let required = Object.keys(need).length;
    
    let window = {};
    let j = 0;
    let i = 0;
    let matches = 0;
    let res = [];

    while(j < s.length){
        let ch = s[j];
        window[ch] = (window[ch] || 0)+1
        if(need[ch] && need[ch] === window[ch]){
            matches++
        }
        j++;

        if(j - i > p.length){
            let c = s[i];
            if(need[c] && need[c] === window[c]){
                matches--
            }
            window[c]--;
        
            if(window[c]==0){
                delete window[c]
            }
            i++
        }

        if(matches === required){
            res.push(i)
        }
    }

    return res
};
