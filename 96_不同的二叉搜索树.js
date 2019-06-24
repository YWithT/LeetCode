/**
 * @param {number} n
 * @return {number}
 */

//自写算法
var numTrees = function (n) {
    let sum = 0;
    let arr = [];
    let memo = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    for (let i = 0; i < arr.length; i++) {
        sum += helper(0, i - 1, memo) * helper(i + 1, arr.length - 1, memo);
    }
    return sum;
};

function helper(start, end, memo) {
    if (start >= end) return 1;
    if (memo[end - start] != undefined) return memo[end - start];
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += helper(start, i - 1, memo) * helper(i + 1, end, memo);
    }
    memo[end - start] = sum;
    return sum;
}

//借鉴算法，卡特兰数算法
var numTrees = function (n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];
};

console.log(numTrees(3));