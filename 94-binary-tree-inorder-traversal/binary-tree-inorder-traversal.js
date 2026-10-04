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
    let stack = [];
    let ans = [];
    let curr = root;

    while(stack.length || curr ){
        while(curr){
            stack.push(curr)
            curr = curr.left
        }
        let element = stack.pop()
        ans.push(element.val)
        if(element.right){
            curr = element.right
        }

    }
    return ans
};