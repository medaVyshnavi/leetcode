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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    function calcDepth (curr){
        if(!curr) return 0;
        let leftDepth = calcDepth(curr.left)
        let rightDepth = calcDepth(curr.right)
        maxDiameter = Math.max(maxDiameter , leftDepth + rightDepth)
        return 1 + Math.max(leftDepth, rightDepth)
    }   
    calcDepth(root)
    return maxDiameter
};