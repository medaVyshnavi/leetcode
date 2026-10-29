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
var isSymmetric = function(root) {
    let ans = true;
    
    function traversal(left,right){
        if(!left && !right) return true ;
        if(!left || !right) return false;

        return left.val === right.val && traversal(left.left, right.right)
        && traversal(left.right,right.left)
    }

    return traversal(root.left,root.right)
};