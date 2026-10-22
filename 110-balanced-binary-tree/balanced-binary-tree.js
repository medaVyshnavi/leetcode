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
    let ans = true;

    function calcHeight(curr, depth){
        if(!curr) return true
        let leftHeight = calcHeight(curr.left, depth)
        let rightHeight = calcHeight(curr.right, depth)

        if(Math.abs(leftHeight - rightHeight) > 1){
            ans = ans && false
        }

        return 1+ Math.max(leftHeight,rightHeight)
    }

    calcHeight(root , 0)
    return ans
    
};