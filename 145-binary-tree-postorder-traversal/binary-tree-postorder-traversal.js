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
    if(!root) return []
    let ans = [];
    let stack = [];
    let curr = root;
    let lastPushed = null

    while(stack.length || curr){
        while(curr){
            stack.push(curr);
            curr = curr.left
        }
        let peekedVal = stack[stack.length-1]
        if(peekedVal.right && lastPushed !== peekedVal.right){
            curr = peekedVal.right
        }else{
            let ele = stack.pop();
            ans.push(ele.val);
            lastPushed = ele
        }
    }
    return ans
};