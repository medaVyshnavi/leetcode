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
var inorderTraversal = function(root) {
    let res =[];
    
    function traverse(curr){
        if(!curr) return;
        traverse(curr.left)
        res.push(curr.val)
        traverse(curr.right)
    }
    traverse(root);
    return res;
};