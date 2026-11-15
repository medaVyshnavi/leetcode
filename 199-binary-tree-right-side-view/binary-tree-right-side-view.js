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
var rightSideView = function(root) {
    if(!root) return []
    let ans = []

    function traversal(curr,depth){
        if(!curr) return;

        if(depth === ans.length){
            ans.push(curr.val)
        }
        traversal(curr.right,depth+1)
        traversal(curr.left,depth+1)
    }

    traversal(root,0);
    return ans
};