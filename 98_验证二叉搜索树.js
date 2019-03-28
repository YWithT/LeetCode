/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//方法一：中序搜索二叉搜索树，只要最后得到的序列是递增的，说明确实是二叉搜索树
var isValidBST = function (root) {
    var res = [];
    check(root, res);
    for (let i = 0; i < res.length - 1; i++) {
        if (res[i + 1] <= res[i])
            return false;
    }
    return true;
};

function check(root, res) {
    if (root == null) return;
    check(root.left, res);
    res.push(root.val);
    check(root.right, res);
}

//方法二：设置最大最小值，每次迭代更新上界和下界。
var isValidBST = function (root) {
    return check(root);
};

function check(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (root == null) return true;
    if (root.val < max && root.val > min)
        return (check(root.left, min, root.val) && check(root.right, root.val, max));
    else
        return false;
}