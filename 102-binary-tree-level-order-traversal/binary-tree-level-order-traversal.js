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
        let newArray = [];
        let lengthArray = q.length;
        for(let i =0; i< lengthArray;i++){
            let item = q.shift();
            item && newArray.push(item.val)
            item.left && q.push(item.left)
            item.right && q.push(item.right)
        }
        ans.push(newArray)
    }
    return ans
};