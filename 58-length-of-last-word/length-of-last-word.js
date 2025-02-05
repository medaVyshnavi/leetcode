/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(" ")
    let foundData = false
    let i = arr.length-1
    while(!foundData){
        if(arr[i] !== ""){
            found = true;
            return arr[i].length
        }
        i--
    }
    return 0
};