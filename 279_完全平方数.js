/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 1; i + j * j <= n; j++) {
            dp[i + j * j] = Math.min(dp[i] + 1, dp[i + j * j]);
        }
    }
    return dp[n];
};