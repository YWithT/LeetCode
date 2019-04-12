/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let head1 = new ListNode(null);
    let head2 = new ListNode(null);
    let head3 = new ListNode(null);
    head1.next = head;
    head2.next = head;
    head3 = head1;

    for (let i = 0; i < n; i++) {
        head2 = head2.next;
    }
    while (head2.next) {
        head2 = head2.next;
        head1 = head1.next;
    }
    head1.next = head1.next.next;
    return head3.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function getList(array) {
    if (!array) {
        let head = new ListNode(null);
        return head;
    }
    let head = new ListNode(null);
    let res = head;
    for (let i = 0; i < array.length; i++) {
        let node = new ListNode(array[i]);
        head.next = node;
        head = node;
    }
    return res.next;
}

console.log(removeNthFromEnd(getList([1, 2, 3]), 1))