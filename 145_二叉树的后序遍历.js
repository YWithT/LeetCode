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
var postorderTraversal = function (root) {
    var res = [];
    postOrder(root, res);
    return res;
};

function postOrder(root, res) {
    if (root == null) return [];
    postOrder(root.left, res);
    postOrder(root.right, res);
    res.push(root.val);
}

//迭代算法
var postorderTraversal = function (root) {
    if (root == null) return;
    var stack = [root];
    var res = [];
    var pre = root;
    while (stack.length != 0) {
        node = stack[stack.length - 1];
        if (pre != node.left && pre != node.right) {
            if (node.right)
                stack.push(node.right);
            if (node.left)
                stack.push(node.left);
        }
        if ((node.left == null && node.right == null) || pre == node.left || pre == node.right) {
            res.push(node.val);
            stack.pop();
        }
        pre = node;
    }
    return res;
};