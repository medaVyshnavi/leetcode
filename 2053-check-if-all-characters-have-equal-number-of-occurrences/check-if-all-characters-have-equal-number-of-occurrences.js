/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const hmap = new Map();

    for(const char of s){
        hmap.set(char, (hmap.get(char) || 0) + 1)
    }

    const values = [...hmap.values()]
    return values.every(item => item === values[0])
};