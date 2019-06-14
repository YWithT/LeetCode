/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (j == 0 || i == 0) dp[i][j] = Math.max(i, j);
            else if (word2[j - 1] == word1[i - 1])
                dp[i][j] = dp[i - 1][j - 1];
            else
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
    }
    return dp[m][n];
};
let word1 = "zoologicoarchaeologist",
    word2 = "zoogeologist"

console.log(minDistance(word1, word2));