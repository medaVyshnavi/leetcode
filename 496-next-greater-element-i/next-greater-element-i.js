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
        while(stack.length){
            if(s[i] > stack[stack.length-1]){
                stack.pop();
            } else{
                map.set(s[i], stack[stack.length-1]);
                stack.push(s[i])
                break;
            }
        }
        if(!stack.length){
            map.set(s[i], -1)
            stack.push(s[i])
        }
    }
    return nums1.map(num => map.get(num))
};