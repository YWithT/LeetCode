/**
 * Definition for a binary tree node.
 * function TreeNode(val) {     
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//递归思想：每一次递归都会将inorder中剩下的数分为左子树和右子数部分，且这两部分是各自连续的，找到各自的边界代入下一次递归即可。
var buildTree = function (preorder, inorder) {
    return newBuildTree(0, 0, inorder.length - 1, preorder, inorder);
};

function newBuildTree(pStart, iStart, iEnd, preorder, inorder) {
    if (pStart > preorder.length - 1 || iStart > iEnd) return null;
    let cur = new TreeNode(preorder[pStart]);
    let i = 0;
    for (i = iStart; i <= iEnd; i++) {
        if (inorder[i] == preorder[pStart]) {
            break;
        }
    }
    cur.left = newBuildTree(pStart + 1, iStart, i - 1, preorder, inorder);
    cur.right = newBuildTree(pStart + i - iStart + 1, i + 1, iEnd, preorder, inorder);
    return cur;
}