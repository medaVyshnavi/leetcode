/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hmap = new Map(nums1.map((value,index) => [value,index]))
    let j=0;
    let result = new Set()
    while (j<nums2.length){
        if(hmap.has(nums2[j])){
            result.add(nums2[j])
        }
        j++
    }
    return Array.from(result)
};