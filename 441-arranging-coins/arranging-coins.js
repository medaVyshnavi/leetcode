/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1;
    let right = n;

    while(left <= right){
        let mid = left + Math.floor((right-left)/2);
        if((mid * ((mid+1)/2)) <= n){
            left = mid+1;
        } else{
            right = mid-1;
        }
    }
    return right
};