/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
//算法核心，假设n为8，则当k为7的排列可为1,8,2,7,3,6,4,5.
//依次类推，当k小于7时，只需构造合适的序列头部，序列尾部依次递增即可.
var constructArray = function (n, k) {
    var left = 1;
    var right = n;
    var res = []
    for (let i = 0; i < k; i++) {
        if (i % 2 == 0) {
            res.push(left++);
        } else {
            res.push(right--);
        }
    }
    if (k % 2 != 0) { //若 k % 2 != 0说明最后一次结束是在左边，只需从左往右继续复制
        while (left <= right) {
            res.push(left++);
        }
    } else { //若 k % 2 != 0说明最后一次结束是在右边，只需从右往左继续复制
        while (left <= right) {
            res.push(right--);
        }
    }
    return res;
};

console.log(constructArray(4, 3))