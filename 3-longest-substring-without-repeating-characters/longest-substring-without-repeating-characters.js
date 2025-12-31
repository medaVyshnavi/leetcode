/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let j = 0;
    let map = new Map();
    let max = 0;

    while (j < s.length) {
        if (map.has(s[j])) {
            let index = map.get(s[j]);
            if (index >= i) {
                i = index + 1;
            }
        }
        map.set(s[j], j);
        max = Math.max(max, j - i + 1);
        j++
    }
    return max

};