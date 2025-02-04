/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let sum = ""
    for(let i=0;i<s.length;i++){
        sum+=getNumber(s[i])
    }
    while(k>0){
        sum = String(sum)
        sum = sum.split("").reduce((acc,curr)=> acc+Number(curr),0)
        k--
    }
    return sum;

};

const getNumber = (char)=> {
    return char.charCodeAt(0)-96;
}