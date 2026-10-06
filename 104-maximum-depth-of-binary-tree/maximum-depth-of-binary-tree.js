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

 // Top Down approach
 // key is to add 1 to the depth while calling the function (similar to pre/post order recursion)

var maxDepth = function(root) {
    if(!root) return 0;

    let maxDepth = 1
    function traversal(curr,depth){
        if(!curr) return 
        traversal(curr.left, depth+1);
        traversal(curr.right, depth+1)
        maxDepth = Math.max(maxDepth, depth)
    }

    traversal(root,1)
    return maxDepth
};