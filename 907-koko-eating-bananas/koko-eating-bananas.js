/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while(left < right){
        let mid = left +Math.floor((right-left)/2)
        let sum = 0;
        for(let pile of piles){
            sum = sum + Math.ceil(pile / mid);
        }
        if(sum <= h){
            right = mid;
        }else{
            left = mid+1
        }
    }
    return left;
};