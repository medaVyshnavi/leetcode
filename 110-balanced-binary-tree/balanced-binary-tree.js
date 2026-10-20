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
    if(!root) return true;
    let ans = true
    function calcHeight(curr){
        if(!curr) return 0;
        let leftHeight = calcHeight(curr.left);
        let rightHeight = calcHeight(curr.right);

        if(Math.abs(leftHeight - rightHeight) > 1){
            ans = ans && false
        }
        return 1+ Math.max(leftHeight,rightHeight)
    }

    calcHeight(root);
    return ans;
};