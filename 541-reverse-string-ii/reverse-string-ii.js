/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
    var reverseStr = function(s, k) {
    let arr = s.split("");
    let n = arr.length;

    for (let start = 0; start < n; start += 2 * k) {
        // Reverse from start to start + k - 1 (or end of string)
        let i = start;
        let j = Math.min(start + k - 1, n - 1);

        while (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return arr.join("");

};