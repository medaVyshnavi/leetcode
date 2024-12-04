/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0;let j=0;
    let m = word1.split('');
    let n = word2.split('');

    let arr = new Array()

    while(i < m.length-1 && j<n.length ){
        arr.push(m[i]);
        arr.push(n[j]);
        i++
        j++
    }

    while( i<m.length){
        arr.push(m[i]);
        i++
    }

    while( j< n.length){
        arr.push(n[j]);
        j++
    }

    return arr.join('')
};