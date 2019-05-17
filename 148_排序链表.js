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
var sortList = function (head) {
    if (head == null || head.next == null) return head;

    let head1 = head;
    let head2 = head;
    let head3 = head;

    while (head2 != null && head2.next != null) {
        head3 = head1;
        head1 = head1.next;
        head2 = head2.next.next;
    }
    head3.next = null;

    return mergeList(sortList(head), sortList(head1));
};

function mergeList(head1, head2) {
    let head3 = new ListNode();
    let node1 = head1;
    let node2 = head2;
    let node3 = head3;
    while (node1 != null && node2 != null) {
        if (node1.val > node2.val) {
            node3.next = node2;
            node2 = node2.next;
        }
        else {
            node3.next = node1;
            node1 = node1.next;
        }
        node3 = node3.next;
    }
    if (node1 != null) node3.next = node1;
    if (node2 != null) node3.next = node2;
    return head3.next;
}

//节点类
function ListNode(val) {
    this.val = val;
    this.next = null;
}

//数组转链表
function arrayToList(array) {
    if (!array) {
        let head = new ListNode(null);
        return head;
    }
    let head = new ListNode(null);
    let listHead = head;
    for (let i = 0; i < array.length; i++) {
        let node = new ListNode(array[i]);
        head.next = node;
        head = node;
    }
    return listHead.next; //返回第一个含值节点
}

console.log(sortList(arrayToList([])))