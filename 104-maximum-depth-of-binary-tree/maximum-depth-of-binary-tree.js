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
var maxDepth = function(root) {
    if(!root) return 0
    let maxD = 1;

    function traversal(curr,depth){
        if(!curr) return;
        traversal(curr.left, depth+1);
        traversal(curr.right, depth+1);
        maxD = Math.max(maxD,depth)
    }

    traversal(root,1)
    return maxD
};