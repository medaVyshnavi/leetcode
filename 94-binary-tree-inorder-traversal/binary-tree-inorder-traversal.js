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
    if(!root) return []
    let ans = []
    let stack = []
    let curr = root

    while(stack.length || curr){
        while(curr){
            stack.push(curr)
            curr = curr.left
        }

        let item = stack.pop();
        ans.push(item.val)
        if(item.right){
            curr = item.right
        }
    }

    return ans
};