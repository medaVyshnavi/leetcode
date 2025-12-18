/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, s) {
    let map = new Map();
    let stack = [];

    let n = s.length;
    for(let i= n-1; i>=0;i--){
        while(stack.length && s[i] > stack[stack.length-1]){
            stack.pop();
        }
        map.set(s[i], stack.length ? stack[stack.length-1] :-1)
        stack.push(s[i])
    }
    return nums1.map(num => map.get(num))
};