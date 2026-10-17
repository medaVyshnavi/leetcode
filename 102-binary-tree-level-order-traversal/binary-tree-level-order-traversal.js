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
    if(!root) return []
    let ans = [];
    let q = [root];

    while(q.length){
        let arr = [];
        let size = q.length;

        for(let i=0;i<size;i++){
            let ele = q.shift();
            arr.push(ele.val);
            ele.left && q.push(ele.left);
            ele.right && q.push(ele.right)
        }
        ans.push(arr)
    }
    return ans;
};