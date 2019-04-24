/**
 * @param {string} n
 * @return {string}
 */
//自写算法，上下加1分别检验，超时
// var nearestPalindromic = function (n) {
//     let left = praseInt(n) - 1;
//     let right = praseInt(n) + 1;
//     while (1) {
//         if (left >= 0) {
//             if (checkPalindromic(left))
//                 return left.toString();
//         }
//         if (checkPalindromic(right))
//             return right.toString();
//         left--;
//         right++;
//     }
// };
// function checkPalindromic(num) {
//     let str = num.toString();
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (str[left] != str[right])
//             return false;
//         left++;
//         right--;
//     }
//     return true;
// }

//借鉴算法
var nearestPalindromic = function (n) {
    let res = [];
    let result = 0;
    let minDiff = Number.MAX_SAFE_INTEGER;

    //将左右边界加入res数组，例如n="123"，则右边界为1001，左边界为99.最终结果一定在左右边界之间
    res.push(BigInt(Math.pow(10, n.length) + 1));
    res.push(BigInt(Math.pow(10, n.length - 1) - 1));

    //取n的前半部分，含中间值
    let prefix = n.substring(0, Math.floor((n.length + 1) / 2));

    //把左半边翻转复制到右边，其中又分为中间值-1，中间值+1，中间值+0三种情况
    //中间值-1和中间值+1两种情况主要作用于n本身就是回文数时
    //由于Int长度限制，所以使用BigInt类型
    for (let i = -1; i <= 1; i++) {
        //将前半部分增加i
        let pre = +prefix + i + "";
        //当n的长度为偶数时，直接将前半部分翻转复制
        if (n.length % 2 == 0) {
            res.push(BigInt(pre + pre.split('').reverse().join('')));
        }
        //当n的长度为奇数时，需去掉中间值再翻转复制
        else {
            res.push(BigInt(pre + pre.substring(0, pre.length - 1).split('').reverse().join('')));
        }
    }
    //遍历res数组，取最小差值，其中应忽略差为0的情况，差为0时说明该数与n相同
    for (let i of res) {
        let curDiff = i - BigInt(n);
        if (curDiff < 0)
            curDiff = -curDiff;
        if (0 < curDiff && curDiff < minDiff) {
            minDiff = curDiff;
            result = i;
        }
        else if (curDiff == minDiff) {
            result = i < result ? i : result;
        }
    }
    return result.toString();
};

console.log(nearestPalindromic("123123123124123123123123123123"))