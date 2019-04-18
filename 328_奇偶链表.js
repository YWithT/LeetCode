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
var oddEvenList = function (head) {
    let oddHead = new ListNode(null);
    let evenHead = new ListNode(null);
    let oddNode = oddHead;
    let evenNode = evenHead;
    let count = 1;
    let node = head;
    while (node) {
        if (count % 2) {
            oddNode.next = node;
            node = node.next;
            oddNode = oddNode.next;
            count++;
        }
        else {
            evenNode.next = node;
            node = node.next;
            evenNode = evenNode.next;
            count++;
        }
    }
    if (evenHead) {
        evenNode.next = null;
        oddNode.next = evenHead.next;
    }
    return oddHead.next;
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
        head = head.next;
    }
    return listHead.next; //返回第一个含值节点
}

console.log(oddEvenList(arrayToList(
    [1, 2, 3, 4, 5]
)))