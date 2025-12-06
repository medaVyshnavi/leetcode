/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let count =0;
    let i = s.length-1;
    while(i >=0 && s[i]!== " "){
        count++;
        i--;
    }
    return count;
};


    // Tc= 0(n), Sc= 0(n)
    // let arr = s.split(" ");
    // for(let i= arr.length-1; i>=0;i--){
    //     if(arr[i].length>0){
    //         return arr[i].length
    //     }
    // }