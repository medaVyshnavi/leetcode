/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for(let i=0;i<strs.length; i++){
        let freq = Array(26).fill(0);
        let index = strs[i];

        for(let j=0;j< index.length;j++){
            freq[index[j].charCodeAt(0) - 97]++
        }

        let key = "";
        for(let k=0;k< 26;k++){
            key+=freq[k]+"#"
        }

        if(map.has(key)){
            map.get(key).push(strs[i])
        } else{
            map.set(key,[strs[i]])
        }
    }

    return [...map.values()]
};