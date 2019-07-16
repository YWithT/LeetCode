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
var reverseList = function (head) {
    let newHead = new ListNode();
    newHead.next = head;
    let node1 = head;
    while (node1 != null) {
        let node2 = node1.next;
        if (node1 !== newHead.next)
            node1.next = newHead.next;
        else {
            node1.next = null;
        }
        newHead.next = node1;
        node1 = node2;
    }
    return newHead.next;
};

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

reverseList(arrayToList([1, 2, 3, 4, 5]))