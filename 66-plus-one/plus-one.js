/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res = "";
    for(let i =0;i<digits.length;i++){
        res+= digits[i];
    }
    res = String(BigInt(res) + 1n);
   
    for(let i =0;i< res.length;i++){
        digits[i] = Number(res[i])
    }

    return digits
};