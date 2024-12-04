/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   let i = 0;
    let result = "";  // Use a string instead of an array

    // Merge characters alternately
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            result += word1[i];  // Append character from word1
        }
        if (i < word2.length) {
            result += word2[i];  // Append character from word2
        }
        i++;
    }

    return result;
};