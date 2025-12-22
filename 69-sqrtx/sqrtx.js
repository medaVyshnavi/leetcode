/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x ;
    let left = 2;
    let right = Math.floor(x/2);

    while(left <= right){
        let middle = Math.floor((left+right)/2);
        if(middle**2 === x){
            return middle;
        } else if(middle**2 > x){
            right = middle-1;
        } else{
            left = left+1;
        }
    }

    return right;
};