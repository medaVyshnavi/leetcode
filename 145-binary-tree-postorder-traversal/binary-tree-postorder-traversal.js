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
var postorderTraversal = function(root) {
    let stack = [];
    let curr = root;
    let ans = [];
    let lastElement = null;

    while(stack.length || curr){
        while(curr){
            stack.push(curr);
            curr = curr.left
        }

        let peekElement = stack[stack.length-1];
        if (peekElement.right && peekElement.right !== lastElement){
            curr = peekElement.right
        }else {
            let ele = stack.pop();
            ans.push(ele.val);
            lastElement = ele
        }
    }
    return ans;
};