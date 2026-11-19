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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isBalanced = true

    function traversal(curr){
        if(!curr) return 0
        let left = traversal(curr.left)
        let right = traversal(curr.right)

        if(Math.abs(left-right) > 1){
            isBalanced = false
        }

        return 1+ Math.max(left,right)
    }

    traversal(root)
    return isBalanced
};