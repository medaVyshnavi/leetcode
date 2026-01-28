/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);
    let left = 1;
    right = position[position.length - 1] - position[0];

    while(left < right){
        let mid = left + Math.floor((right-left+1)/2);
        let balls = 1;
        let last = position[0];

        for(let i = 1; i<position.length;i++){
            if(position[i] - last >= mid){
                balls++;
                last = position[i]
            }
        }
        if(balls >= m){
            left = mid;
        }else{
            right = mid-1
        }
    }
    return left
};