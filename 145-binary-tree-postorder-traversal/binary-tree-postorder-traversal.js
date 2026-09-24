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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];

    function traverse(curr){
        if(!curr) return
        traverse(curr.left)
        traverse(curr.right)
        res.push(curr.val)
    }
    traverse(root)
    return res;
};