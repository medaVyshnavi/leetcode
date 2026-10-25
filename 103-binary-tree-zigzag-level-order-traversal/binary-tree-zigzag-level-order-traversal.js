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
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let q = [root]
    let ans = []
    
    function traversal(curr, depth){
        if(!ans[depth]) ans[depth] = [];

        if(depth % 2 == 0){
            ans[depth].push(curr.val)
        }else{
            ans[depth].unshift(curr.val)
        }

        curr.left && traversal(curr.left, depth+1)
        curr.right && traversal(curr.right, depth+1)

    }

    traversal(root,0)
    return ans
};