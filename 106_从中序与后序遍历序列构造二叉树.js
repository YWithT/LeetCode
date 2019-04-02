/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    return newBuildTree(postorder.length - 1, 0, inorder.length - 1, inorder, postorder);
};

function newBuildTree(pStart, iStart, iEnd, inorder, postorder) {
    if (pStart < 0 || iStart > iEnd) return null;
    let cur = new TreeNode(postorder[pStart]);
    let i = 0;
    for (i = iStart; i <= iEnd; i++) {
        if (inorder[i] == postorder[pStart]) {
            break;
        }
    }
    cur.right = newBuildTree(pStart - 1, i + 1, iEnd, inorder, postorder);
    cur.left = newBuildTree(pStart - iEnd + i - 1, iStart, i - 1, inorder, postorder);
    return cur;
}