/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function (prices) {
    if (prices.length == 0) return 0;
    var n = prices.length;
    var g = [];
    var l = [];
    for (let i = 0; i < n; i++) {
        g.push(new Array(3).fill(0));
        l.push(new Array(3).fill(0));
    }
    for (let i = 1; i < prices.length; ++i) {
        let diff = prices[i] - prices[i - 1];
        for (let j = 1; j <= 2; ++j) {
            l[i][j] = Math.max(g[i - 1][j - 1] + Math.max(diff, 0), l[i - 1][j] + diff);
            g[i][j] = Math.max(l[i][j], g[i - 1][j]);
        }
    }
    return g[n - 1][2];
};

var a = [3, 3, 5, 0, 0, 3, 1, 4];
console.log(maxProfit(a));