/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(s) {
    let i = 0;
    let j = 0;
    let map = {};
    let distinct = 0;
    let max = 0;

    while (j < s.length) {
        if (!map[s[j]]) distinct++;
        map[s[j]] = (map[s[j]] || 0) + 1;

        while (distinct > 2) {
            map[s[i]]--;
            if (map[s[i]] === 0) {
                delete map[s[i]];
                distinct--;
            }
            i++;
        }

        max = Math.max(max, j - i + 1);
        j++;
    }
    return max;
};
