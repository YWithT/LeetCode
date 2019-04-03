/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return buildTree(nums, 0, nums.length - 1);
};

function buildTree(nums, left, right) {
    if (left > right) return null;
    let index = Math.floor((left + right) / 2);
    let cur = new TreeNode(nums[index]);
    cur.left = buildTree(nums, left, index - 1);
    cur.right = buildTree(nums, index + 1, right);
    return cur;
}