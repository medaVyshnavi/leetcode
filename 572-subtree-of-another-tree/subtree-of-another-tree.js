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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let h1 = hashString(root)
    let h2 = hashString(subRoot)
    return h1.includes(h2)
};

function hashString(root){
    let hash = ""

    function traversal(curr){
        if(!curr) return hash = hash + "#";
        hash = hash + "-" + curr.val + "#";
        traversal(curr.left)
        traversal(curr.right)
    }
    traversal(root)
    return hash
}