/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let sum = 0
    let right = weights.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

    while(left < right){
        let mid = left + Math.floor((right-left)/2);
       
        let currLoad = 0;
        let period = 1;

        for(let load of weights){
            currLoad = currLoad+load;
            if(currLoad > mid){
                period++;
                currLoad = 0;
                currLoad = currLoad+load
            }            
        }

        if(period <= days){
            right = mid
        }else{
            left = mid+1
        }
    }
    return left
};