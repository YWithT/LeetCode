/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

//算法，相比"105_从前序与中序遍历序列构造二叉树"和"106_从中序与后序遍历序列构造二叉树"，使用前序和后序序列来构造二叉树更为复杂
//因为无法通过一步就判断出当前节点的左子树序列和右子数序列，需要对下一个节点进一步嗅探，来判断出当前节点的左子树和右子数分别包含哪些节点
var constructFromPrePost = function (pre, post) {
    var root = buildTree(0, 0, post.length - 1, pre, post);
    return root;
};

function buildTree(preStart, postStart, postEnd, pre, post) {
    if (preStart > pre.length - 1 || postStart > postEnd) return null;
    let cur = new TreeNode(pre[preStart]);
    let i = post.indexOf(pre[preStart]);
    //对下一个节点进一步嗅探
    let j = post.indexOf(pre[preStart + 1]);
    if (j != -1 && j < i && cur != null) {
        //根据j的值将post分为左子树和右子数
        cur.left = buildTree(preStart + 1, postStart, j, pre, post);
        cur.right = buildTree(preStart + j - postStart + 2, j + 1, postEnd - 1, pre, post);
    }
    return cur;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

pre = [1, 2, 4, 5, 3, 6, 7];
post = [4, 5, 2, 6, 7, 3, 1];
console.log(constructFromPrePost(pre, post));