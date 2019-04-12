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