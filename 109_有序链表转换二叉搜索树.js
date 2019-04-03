/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    var nums = [];
    while (head) {
        nums.push(head.val);
        head = head.next;
    }
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