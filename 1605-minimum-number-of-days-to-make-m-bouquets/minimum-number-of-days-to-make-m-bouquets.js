/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(bloomDay.length < (m*k)) return -1;
    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);

    while(left < right){
        let mid = left + Math.floor((right-left)/2);
        let count = 0;
        let bouq = 0;
        for(let day of bloomDay){
            if(day <= mid){
                count++;
                if(count === k){
                    bouq++;
                    count = 0;
                }
            }else{
                count = 0;
            }
        }
        if(bouq>=m){
            right = mid
        }else{
            left = mid+1
        }
    }
    return left
};