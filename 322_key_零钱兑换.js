/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//动态规划
var coinChange = function (coins, amount) {
    var res = new Array(amount + 1).fill(amount + 1);
    res[0] = 0;
    for (let i = 1; i < res.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                res[i] = Math.min(res[i], res[i - coins[j]] + 1);
            }
        }
    }
    return res[amount] == amount + 1 ? -1 : res[amount];
};


//递归+动态规划
var coinChange = function (coins, amount) {
    var res = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    res[0] = 0;
    return coinChangeDFS(coins, amount, res);
};

function coinChangeDFS(coins, amount, res) {
    if (amount < 0) return -1;
    if (res[amount] != Number.MAX_SAFE_INTEGER) return res[amount];
    for (let i = 0; i < coins.length; i++) {
        let val = coinChangeDFS(coins, amount - coins[i], res);
        if (val >= 0) {
            res[amount] = Math.min(res[amount], val + 1);
        }
    }
    return res[amount] = (res[amount] == Number.MAX_SAFE_INTEGER) ? -1 : res[amount]; //此处应赋值，否则会造成大量重复计算
}