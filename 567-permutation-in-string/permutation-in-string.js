/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let arr1  = Array(26).fill(0);
    let size = 0
    for(let i =0;i<s1.length;i++){
        let c = s1[i].charCodeAt(0) - 97;
        arr1[c]++;
    }

    for(let i =0;i<arr1.length;i++){
        if(arr1[i] !== 0) size++;
    }

    let arr2 = Array(26).fill(0);
    let i =0; let j =0; let valid = 0;
    while(j < s2.length){
        let c = s2[j].charCodeAt(0) - 97;
        arr2[c]++;
        if(arr1[c] === arr2[c]) valid++
        j++;

        while( j - i >= s1.length){
            if(valid === size) return true;
            let ch = s2[i].charCodeAt(0) - 97;
            if(arr1[ch] === arr2[ch]) valid--;
            arr2[ch]--;
            i++
        }
    }
    return false;
};