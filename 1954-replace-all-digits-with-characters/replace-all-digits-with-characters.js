/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            res.push(s[i]);
        } else {
            let shifted =
                String.fromCharCode(
                    s[i - 1].charCodeAt(0) + Number(s[i])
                );
            res.push(shifted);
        }
    }

    return res.join("");
};
