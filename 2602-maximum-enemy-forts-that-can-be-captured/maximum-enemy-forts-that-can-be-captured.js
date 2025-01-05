/**
 * @param {number[]} forts
 * @return {number}
 */
function captureForts(forts) {
    let prev = 0 ;
    let max=0;

    forts.forEach((fort,idx) => {
        if(fort){
            if(forts[prev] && fort !== forts[prev]){
                max = Math.max(max, (idx-prev-1))
            }
            prev= idx
        }
    })

    return max
}
