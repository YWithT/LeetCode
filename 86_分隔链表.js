/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (head == null || head.next == null) return head;

    let newHead = new ListNode();
    newHead.next = head;
    let n0 = head.val < x ? head : newHead;
    let n1 = head;
    while (n1 && n1.next) {
        if (n1.next.val >= x) {
            n1 = n1.next;
        }
        else {
            if (n0.next == n1.next) {
                n0 = n0.next;
                n1 = n1.next;
            }
            else {
                let temp = n1.next.next;
                n1.next.next = n0.next;
                n0.next = n1.next;
                n1.next = temp;
                n0 = n0.next;
            }
        }
    }
    return newHead.next;
};