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
var detectCycle = function (head) {
    let node1 = head;
    let node2 = head;
    let flag = 0;
    while (node2 != null && node2.next != null) {
        node1 = node1.next;
        node2 = node2.next.next;
        //两者能够相遇说明链表中有环
        if (node1 == node2) {
            flag = 1;
            break;
        }
    }
    //若有环
    if (flag) {
        //将node1移至链表头，两者统一步调，再次相遇的点即为入环点
        node1 = head;
        let res = 0;
        while (node1 != node2) {
            node1 = node1.next;
            node2 = node2.next;
            res++;
        }
        return node1;
    }
    //若无环
    return null;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let obj = {};
obj.node1 = new ListNode(3);
obj.node2 = new ListNode(2);
obj.node3 = new ListNode(0);
obj.node4 = new ListNode(-4);

let head = obj.node1;
obj.node1.next = obj.node2;
obj.node2.next = obj.node3;
obj.node3.next = obj.node4;
obj.node4.next = null;

console.log(detectCycle(head));