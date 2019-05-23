/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//注意领会题目要求
var subtreeWithAllDeepest = function (root) {
    let diff = getDepth(root.left) - getDepth(root.right);
    return diff == 0 ? root : subtreeWithAllDeepest(diff > 0 ? root.left : root.right);
};

function getDepth(node) {
    return !node ? 0 : Math.max(getDepth(node.left), getDepth(node.right)) + 1;
}