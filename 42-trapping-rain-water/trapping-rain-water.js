/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let n = arr.length
    let maxL = [];
    let maxR = [];
    maxL[0] = arr[0];
    maxR[n-1] = arr[n-1];

    for(let i =1;i<n-1;i++){
        maxL[i] = Math.max(maxL[i-1], arr[i])
    }

    for(let i = n-2 ; i>=0 ; i--){
        maxR[i] = Math.max(maxR[i+1], arr[i])
    }

    let res = 0
    for(let i =0;i<n-1;i++){
        let val = Math.min(maxL[i],maxR[i]) - arr[i];
        res = res + (val<0 ? 0 :val)
    }

    return res
};