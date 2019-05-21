/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null || head.next == null || k == 0) return head;

    let newHead = new ListNode();
    newHead.next = head;

    //计算链表长度
    let length = 1;
    let nEnd = head;
    while (nEnd.next != null) {
        nEnd = nEnd.next;
        length++;
    }

    //实际需旋转长度
    k = k % length;
    //若k==0说明无需旋转直接返回
    if (k == 0) return head;
    k = length - k;

    //定位到目标段起始节点
    let nStart
    nStart = head;
    while (--k > 0) {
        nStart = nStart.next;
    }

    //位移
    newHead.next = nStart.next;
    nEnd.next = head;
    nStart.next = null;

    return newHead.next;
};