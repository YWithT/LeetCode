/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//自写算法1，超时
// var findMaxForm = function (strs, m, n) {
//     return helper(strs, m, n);
// };

// function helper(strs, m, n) {
//     if (strs.length == 0) {
//         return 0;
//     }
//     else {
//         let str = strs.pop();
//         let [c0, c1] = getNums(str);
//         if (m >= c0 && n >= c1) {
//             return Math.max(helper(strs.concat(), m, n), helper(strs.concat(), m - c0, n - c1) + 1);
//         }
//         else {
//             return helper(strs.concat(), m, n);
//         }
//     }
// }

// function getNums(str) {
//     let zeroCount = 0;
//     let oneCount = 0;
//     for (let i of str) {
//         if (i == "0") zeroCount++;
//         if (i == "1") oneCount++;
//     }
//     return [zeroCount, oneCount];
// }

//优化算法
var findMaxForm = function (strs, m, n) {
    //生成二维数组
    let res = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    for (let str of strs) {
        let zeros = 0;
        let ones = 0;
        for (let c of str) c == '0' ? zeros++ : ones++;
        //由于大项依赖于小项，所以应从大到小便利
        for (let i = m; i >= zeros; --i) {
            for (let j = n; j >= ones; --j) {
                res[i][j] = Math.max(res[i][j], res[i - zeros][j - ones] + 1);
            }
        }
    }
    return res[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));