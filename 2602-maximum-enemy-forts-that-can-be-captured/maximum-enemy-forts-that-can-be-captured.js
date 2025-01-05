/**
 * @param {number[]} forts
 * @return {number}
 */
function captureForts(forts) {
    let prev = 0;
    let max=0;

    for (let k=0;k<forts.length;k++){
        if(forts[k]){
            if(forts[prev] && forts[k]!==forts[prev]){
                max = Math.max(max, k-prev-1)
            }
            prev = k
        }
    }
    return max
}
