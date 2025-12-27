/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let l = 0;
    let r = arr.length-1;
    while( l <= r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m] !== arr[m-1] && arr[m] !== arr[m+1]){
            return arr[m];
        }
        if(arr[m] === arr[m-1]){
            if((m-1-l) % 2 !== 0){
                r = m-2;
            } else{
                l = m+1;
            }
        } else{
            if((r-m-1) %2 !==0){
                l = m+2
            }else{
                r = m-1;
            }
        }
    }
};