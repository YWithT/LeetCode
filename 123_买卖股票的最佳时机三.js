/**
 * @param {number[]} prices
 * @return {number}
 */

// var Math.maxProfit = function (prices) {
//     if (prices == null || prices.length == 0)
//         return 0;
//     var local = [];
//     var global = [];
//     for (let i = 0; i < prices.length - 1; i++) {
//         let diff = prices[i + 1] - prices[i];
//         for (let j = 2; j >= 1; j--) {
//             local[j] = Math.Math.max(global[j - 1] + (diff > 0 ? diff : 0), local[j] + diff);
//             global[j] = Math.Math.max(local[j], global[j]);
//         }
//     }
//     return global[2];
// };


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