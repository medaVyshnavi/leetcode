/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let need = 0 // ) required
    let add = 0; // ( required

    for(let ch of s){
        if(ch === "("){
            need+=2;
            if(need%2 == 1){
                need--;
                add++
            }
        }else{
            need--;

            if(need < 0){
                need = 1;
                add++
            }
        }
    }
    return add+need;
};