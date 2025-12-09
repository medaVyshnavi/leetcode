/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowel = "aeiou";
    let vowelMap = new Map();
    let consMap = new Map();
    let vMax= 0;
    let cMax =0;

    for(let i=0;i<s.length;i++){
        if(vowel.includes(s[i])){
            if(vowelMap.has(s[i])){
                vowelMap.set(s[i], vowelMap.get(s[i])+1)
            }else{
                vowelMap.set(s[i], 1)
            }
            vMax = Math.max(vMax, vowelMap.get(s[i]))
        } else{
            if(consMap.has(s[i])){
                consMap.set(s[i], consMap.get(s[i])+1)
            }else{
                consMap.set(s[i], 1)
            }
            cMax = Math.max(cMax, consMap.get(s[i]))
        }
    }
    return cMax+vMax;
};