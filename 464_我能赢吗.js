/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    if (maxChoosableInteger >= desiredTotal) return true;
    if ((maxChoosableInteger + 1) / 2 * maxChoosableInteger < desiredTotal) return false;
    let res = [];
    return canWin(maxChoosableInteger, desiredTotal, 0, res);
};

function canWin(maxInt, total, used, res) {
    if (res[used]) return res[used];
    for (let i = 0; i < maxInt; i++) {
        let cur = (1 << i);
        let cal = cur & used;
        if (cal == 0) { //按位与
            if (total <= i + 1 || !canWin(maxInt, total - (i + 1), used | cur, res)) {
                res[used] = true;
                return true;
            }
        }
    }
    res[used] = false;
    return false;
};


//错误解法：此题无法从下往上计算，因为无法记住在上一个状态使用过哪些数字
// var canIWin = function (maxChoosableInteger, desiredTotal) {
//     if (maxChoosableInteger >= desiredTotal) return true;
//     if ((maxChoosableInteger + 1) / 2 * maxChoosableInteger < desiredTotal) return false;
//     let res = [];
//     let visited = new Array(desiredTotal + 1).fill(0);
//     for (let i = 0; i <= desiredTotal; i++) {
//         canWin(i, maxChoosableInteger, visited, res);
//     }
//     for (let i in res)
//         console.log(i, res[i]);
//     return res[desiredTotal];
// };

// function canWin(cur, maxInt, visited, res) {
//     if (res[cur] != undefined) return res[cur];
//     if (cur <= maxInt) {
//         res[cur] = true;
//         return;
//     }
//     for (let i = 1; i <= maxInt; i++) {
//         if (visited[i] != 1) {
//             visited[i] = 1;
//             if (!canWin(cur - i, maxInt, visited, res)) {
//                 res[cur] = true;
//                 visited[i] = 0;
//                 return;
//             }
//             visited[i] = 0;
//         }
//     }
//     res[cur] = false;
//     return;
// };

console.log(canIWin(10, 40))