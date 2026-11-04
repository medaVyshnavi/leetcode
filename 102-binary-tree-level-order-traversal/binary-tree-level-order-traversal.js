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
    let q = [root]

    while(q.length){
        let depthArray = []
        let size = q.length

        for(let i = 0;i<size; i++){
            let curr = q.shift();
            curr && depthArray.push(curr.val)
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
        ans.push(depthArray)
    }
    return ans
    
};