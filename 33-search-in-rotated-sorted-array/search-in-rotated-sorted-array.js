/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let m = left + Math.floor((right - left) / 2);
        if (arr[m] === target) return m;
        if (arr[m] >= arr[left]) {
            if (target < arr[m] && target >= arr[left]) {
                right = m - 1;
            } else {
                left = m + 1;
            }
        } else {
            if (target > arr[m] && target <= arr[right]) {
                left = m + 1;
            } else {
                right = m - 1;
            }
        }
    }
    return -1
};