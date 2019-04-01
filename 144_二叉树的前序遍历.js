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
var preorderTraversal = function (root) {
    var res = [];
    preOrder(root, res);
    return res;
};

function preOrder(root, res) {
    if (root == null) return;
    res.push(root.val);
    preOrder(root.left, res);
    preOrder(root.right, res);
}

//迭代算法1
var preorderTraversal = function (root) {
    if (root == null) return [];
    var stack = []
    var res = [];
    while (root != null || stack.length != 0) {
        while (root != null) {
            res.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop().right;
    }
    return res;
};

//迭代算法2
var preorderTraversal = function (root) {
    if (!root) return [];
    let stack = [root];
    let res = [];
    while (stack.length > 0) {
        let top = stack.pop();
        res.push(top.val);
        if (top.right) {
            stack.push(top.right);
        }
        if (top.left) {
            stack.push(top.left);
        }
    }
    return res;
};