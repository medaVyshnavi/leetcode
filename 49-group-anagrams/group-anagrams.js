/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortedArr = [];
    for(let i=0; i<strs.length;i++){
        sortedArr.push(strs[i].split("").sort().join(""));
    }

    let map = {};
    for(let i=0;i<strs.length;i++){
        if(map[sortedArr[i]]){
            map[sortedArr[i]] = [strs[i], ...map[sortedArr[i]]];
        } else{
            map[sortedArr[i]] = [strs[i]]
        }
    }
    
    return Object.values(map);
};