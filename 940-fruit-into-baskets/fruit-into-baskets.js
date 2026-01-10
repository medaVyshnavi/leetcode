/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(s) {
    let i = 0;
    let j = 0;
    let map = {};
    let max = 0;
    let distinct = 0;

    while(j < s.length){
        map[s[j]] = (map[s[j]] || 0) + 1;
        distinct = Object.keys(map).length;
        if(distinct > 2){
            map[s[i]]--;
            if(map[s[i]] == 0){
                delete map[s[i]];
            }
            i++;
        }
        max = Math.max(max, j-i+1)
        j++
    }
    return max
};