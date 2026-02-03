/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let need = 0;
    let ans = 0;

    for(let ch of s){
        if(ch === "("){
            need++;
        }else{
            need--;
            if(need<0){
                ans++;
                need=0
            }
        }
    }
    return need+ans;
};