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
    //使用的是res[used]而不是res[total]，这样可以同时记录状态和该状态对应使用了哪些数字
    //例如res[7] = ture,表示在使用了二进制数字111，即数字1,2,3时，先手能赢。
    if (res[used]) {
        return res[used];
    }
    for (let i = 0; i < maxInt; i++) {
        //将cur左移i位后与used按位进行与运算，若没有重复数字则结果为0
        let cur = (1 << i);
        let cal = cur & used;

        if (cal == 0) {
            //若下一步对手输即先手为赢，所以当下一步返回false时或者i+1大于total时，对应的used为true
            if (total <= i + 1 || !canWin(maxInt, total - (i + 1), used | cur, res)) {
                res[used] = true;
                return true;
            }
        }
    }
    //若返回的全为true表示下一步对手必胜，则此步为false
    res[used] = false;
    return false;
};

console.log(canIWin(4, 8))