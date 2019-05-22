/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    while (head == null || head.next == null) return head;
    let newHead = new ListNode();
    newHead.next = head;
    let pre = newHead;
    for (let i = 1; i < m; i++) {
        pre = pre.next;
    }
    let length = n - m;
    let startNode = pre.next;
    for (let i = 0; i < length; i++) {
        let node = startNode.next;
        startNode.next = node.next;
        let temp = pre.next;
        pre.next = node;
        node.next = temp;
    }
    return newHead.next;
};