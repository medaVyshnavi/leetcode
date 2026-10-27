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
    let hash1 = serialize(root)
    let hash2 = serialize(subRoot)

    return hash1.includes(hash2)
};

var serialize = function (root){
    let hash = ""

    function traverse(curr){
        if(!curr) {
            hash = hash + "-#"
            return
        }
        hash = hash + "-" + curr.val + "#";
        traverse(curr.left)
        traverse(curr.right)
    }

    traverse(root);
    return hash
}