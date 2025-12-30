/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    let i = 0;
    let j = arr.length-1;
    let max = 0;

    while(i < j){
        let area = Math.min(arr[i],arr[j]) * (j-i);
        max = Math.max(area,max);
        if(arr[i] < arr[j]){
            i++;
        }else{
            j--;
        }
    }

    return max;
};