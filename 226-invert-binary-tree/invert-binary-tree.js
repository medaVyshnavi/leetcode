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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root

    function traversal(curr){
        if(!curr) return 
        let temp = curr.left
        curr.left = curr.right
        curr.right = temp

        traversal(curr.left)
        traversal(curr.right)
    }

    traversal(root)
    return root
};