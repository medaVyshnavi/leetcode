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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let ans = true;
    let q = [root.left,root.right]

    while(q.length){
        let left = q.shift();
        let right = q.shift();
        if(!right && !left) continue;
        if(!left || !right) return false;
        if(left.val !== right.val) return false;
        q.push(left.left,right.right)
        q.push(left.right,right.left)
    }

    return ans
     
};