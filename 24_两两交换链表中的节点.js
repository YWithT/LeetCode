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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head == null || head.next == null) return head;
    let newHead = new ListNode();
    newHead.next = head;
    let n0 = newHead;
    let n1 = head;
    let n2 = head.next;
    while (n2 != null) {
        let temp = n2.next;
        n0.next = n2;
        n2.next = n1;
        n1.next = temp;
        n0 = n1;
        n1 = temp;
        n2 = n1 == null ? null : n1.next;
    }
    return newHead.next;
};

console.log(swapPairs(arrayToList([2, 1, 4])))