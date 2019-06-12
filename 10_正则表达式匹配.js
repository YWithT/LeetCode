/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// //递归解法
// var isMatch = function (s, p) {
//     if (p == "") return s == "";
//     if (p.length == 1) {
//         return s.length == 1 && (s == p || p == '.');
//     }
//     if (p[1] != "*") {
//         if (s.length == 0) return false;
//         return (s[0] == p[0] || p[0] == '.') && isMatch(s.slice(1), p.slice(1));
//     }
//     if (s.length != 0 && (s[0] == p[0] || p[0] == '.')) {
//         return isMatch(s, p.slice(2)) || isMatch(s.slice(1), p);
//     }
//     else
//         return isMatch(s, p.slice(2));
// };


//dp解法
/*
我们也可以用DP来解，定义一个二维的DP数组，其中dp[i][j]表示s[0,i)和p[0,j)是否match，然后有下面三种情况

1.  P[i][j] = P[i - 1][j - 1], if p[j - 1] != '*' && (s[i - 1] == p[j - 1] || p[j - 1] == '.');
2.  P[i][j] = P[i][j - 2], if p[j - 1] == '*',即*前面的字符重复0次
3.  P[i][j] = P[i - 1][j] && (s[i - 1] == p[j - 2] || p[j - 2] == '.'), if p[j - 1] == '*' and the pattern repeats for at least 1 times. 
*/

var isMatch = function (s, p) {
    let m = s.length,
        n = p.length;
    let dp = new Array(m + 1).fill(false).map(x => new Array(n + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > 1 && p[j - 1] == '*') {
                dp[i][j] = dp[i][j - 2] || (i > 0 && (s[i - 1] == p[j - 2] || p[j - 2] == '.') && dp[i - 1][j]);
            }
            else {
                dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.');
            }
        }
    }
    return dp[m][n];
}
s = "aab"
p = "c*a*b"
console.log(isMatch(s, p));