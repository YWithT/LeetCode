/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//递归算法
var inorderTraversal = function (root) {
    var res = [];
    inorder(root, res);
    return res;
};

function inorder(root, res) {
    if (root == null) return;
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
}

//迭代算法1
var inorderTraversal = function (root) {
    if (root == null) return [];
    var stack = [root];
    var res = [];
    var next = root.left;
    while (next != null || stack.length != 0) {
        while (next != null) {
            stack.push(next);
            next = next.left;
        }
        next = stack.pop();
        res.push(next.val);
        next = next.right;
    }
    return res;
};