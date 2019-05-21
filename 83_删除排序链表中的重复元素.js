/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head == null || head.next == null) return head;
    let node1 = head;
    while (node1 != null) {
        if (node1.next && node1.val == node1.next.val) {
            let node2 = node1.next;
            while (node2 != null && node2.val == node1.val) {
                node2 = node2.next;
            }
            node1.next = node2;
            node1 = node1.next;
        }
        else {
            node1 = node1.next;
        }
    }
    return head;
};