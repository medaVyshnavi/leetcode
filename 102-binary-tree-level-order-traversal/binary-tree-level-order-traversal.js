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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [];

    function traversal(curr, depth){
        if(!curr) return
        if(!ans[depth]) ans[depth] = [];
        ans[depth].push(curr.val)
        traversal(curr.left,depth+1);
        traversal(curr.right,depth+1)
    }

    traversal(root,0)
    return ans
};