/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let head = new ListNode();
    for (let i = 0; i < lists.length; i++) {
        head = mergeList(head, lists[i]);
    }
    return head.next;
};

function mergeList(head1, head2) {
    let head = new ListNode();
    let node = head;
    while (head1 != null && head2 != null) {
        if (head1.val > head2.val) {
            node.next = head2;
            head2 = head2.next;
        }
        else {
            node.next = head1;
            head1 = head1.next;
        }
        node = node.next;
    }
    if (head1 != null) node.next = head1;
    if (head2 != null) node.next = head2;
    return head.next;
}