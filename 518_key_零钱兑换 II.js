/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    var sum = new Array(amount + 1).fill(0);
    sum[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            sum[j] += sum[j - coins[i]];
        }
    }
    return sum[amount];
};

console.log(change(5, [1, 2, 5]))