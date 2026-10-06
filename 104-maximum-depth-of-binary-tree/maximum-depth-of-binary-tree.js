/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Bottom-up Approach.
// key is to use 1+ max(left,right) at every step 
var maxDepth = function(root) {
    if(!root) return 0
    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)
    return 1+ Math.max(leftMax,rightMax)
};