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

//算法思想：中序遍历二叉搜索树，产生有序数列，然后对数列进行判断。需要注意的是本题中的参数全部需要引用。
var findMode = function (root) {
    var times = [0];
    var res = [];
    var pre = [null];
    var cur = [1];
    getMode(root, pre, cur, res, times);
    return res;
};

function getMode(root, pre, cur, res, times) {
    if (root == null) {
        return;
    }
    getMode(root.left, pre, cur, res, times);
    if (pre[0]) {
        cur[0] = (root.val == pre[0].val) ? cur[0] + 1 : 1;
    }
    if (cur[0] >= times[0]) {
        if (cur[0] > times[0])
            res.splice(0, res.length);
        res.push(root.val);
        times[0] = cur[0];
    }
    pre[0] = root;
    getMode(root.right, pre, cur, res, times);
}