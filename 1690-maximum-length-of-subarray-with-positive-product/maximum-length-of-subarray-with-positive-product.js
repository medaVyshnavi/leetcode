/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let good = 0;
    let bad = 0;
    let res = 0;

    for(let x of nums){
        if(x > 0){
            good = good +1;
            bad = bad > 0 ? bad+1 : 0
        } else if(x < 0){
            let newGood = bad >  0 ? bad +1 : 0;
            let newBad = good +1;

            good = newGood;
            bad = newBad;
        }else{
            good = 0;
            bad = 0;
        }

        res = Math.max(good,res)
    }
    return res;
};