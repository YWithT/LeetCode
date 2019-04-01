/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
    var height = getTreeHeight(root);
    var res = [];
    var arrLength = Math.pow(2, height) - 1;
    var arr1 = new Array(arrLength).fill("");
    for (let i = 0; i < height; i++) {
        res.push(arr1.concat());
    }
    getImg(root, 0, 0, arrLength, res);
    return res;
};

function getTreeHeight(root) {
    if (root == null) return 0;
    else
        return 1 + Math.max(getTreeHeight(root.left), getTreeHeight(root.right));
}

function getImg(root, curHeight, left, right, res) {
    let rootIndex = Math.floor((left + right) / 2);
    if (root == null) return;
    else {
        res[curHeight][rootIndex] = root.val.toString();
    }
    if (root.left) getImg(root.left, curHeight + 1, left, rootIndex, res);
    if (root.right) getImg(root.right, curHeight + 1, rootIndex, right, res);
}