/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    var res = [];
    getLevelOrder(root, 0, res);
    return res;
};

function getLevelOrder(root, curLerver, res) {
    if (root == null) return;
    if (res[curLerver] == undefined) {
        res.push([]);
    }
    res[curLerver].push(root.val);
    getLevelOrder(root.left, curLerver + 1, res);
    getLevelOrder(root.right, curLerver + 1, res);
}