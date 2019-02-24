/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //自己的写法：
var addTwoNumbers = function (l1, l2) {
    var flag = 0;
    var l3 = '';
    var curr = '';

    if (l1 || l2) {
        let count = flag;
        if (l1) {
            count += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            count += l2.val;
            l2 = l2.next
        }
        if (count >= 10) {
            curr = new ListNode(count - 10);
            l3 = curr;
            flag = 1;
        } else {
            curr = new ListNode(count);
            l3 = curr;
            flag = 0;
        }
        while (l1 || l2) {
            count = flag;
            if (l1) {
                count += l1.val;
                l1 = l1.next;
            }
            if (l2) {
                count += l2.val;
                l2 = l2.next;
            }
            if (count >= 10) {
                curr.next = new ListNode(count - 10);
                curr = curr.next;
                flag = 1;
            } else {
                curr.next = new ListNode(count);
                
                flag = 0;
            }
        }
    }

    if (flag == 1)
        curr.next = new ListNode(1);

    return l3;
};

//借鉴写法
var addTwoNumbers = function(l1, l2) {
    let curEle = result = new ListNode(0)
    let carry = 0
    while (l1 || l2 || carry) {     //在判断条件中添加carry可以避免在末尾再次判断
        let sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        carry = sum > 9 ? 1 : 0
        curEle.next = new ListNode((sum) % 10)  //此写法将大于9和小于等于9两种情况进行了合并
        curEle = curEle.next
    }
    return result.next     //精髓之处在于返回头结点的next，这样第一个节点不用分开考虑
};