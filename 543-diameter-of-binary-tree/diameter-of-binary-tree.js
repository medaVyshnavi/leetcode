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
    let maxDiameter = 0

    function calcHeight (curr){
        if(!curr) return 0;
        let leftHeight = calcHeight(curr.left)
        let rightHeight = calcHeight(curr.right)
        maxDiameter = Math.max(maxDiameter, (leftHeight+rightHeight))
        return 1+ Math.max(leftHeight,rightHeight)
    }

    calcHeight(root)
    return maxDiameter
};