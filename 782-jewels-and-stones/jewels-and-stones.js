/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set();
    for(let i=0;i<jewels.length;i++){
        jSet.add(jewels[i]);
    }

    let count =0;
    for(let i=0;i<stones.length;i++){
        if(jSet.has(stones[i])){
            count++
        }
    }
    return count;


    // let count = 0;
    // let i=0;
    // let j=0;

    // while(i<jewels.length){
    //     if(jewels[i] === stones[j]){
    //         count++;
    //     }
    //     j++;
    //     if(j > stones.length-1){
    //         i++;
    //         j =0;
    //     }
    // }
    // return count;

    // 1. nested for loops
    // let count = 0;
    // for(let i=0;i<jewels.length;i++){
    //     for(let j=0;j<stones.length;j++){
    //         if(jewels[i] === stones[j]){
    //             count++;
    //         }
    //     }
    // }
    // return count;
};