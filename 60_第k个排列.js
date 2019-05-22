/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//自写算法，递归回溯
// var getPermutation = function (n, k) {
//     let res = [];
//     let curCount = [1];
//     helper(curCount, [], n, k, res);
//     return res[0].join("");
// };

// function helper(curCount, curArr, n, k, res) {
//     if (curArr.length >= n) {
//         if (curCount[0] == k) {
//             res.push(curArr.concat());
//             return;
//         }
//         curCount[0]++
//         return;
//     }
//     else {
//         for (let i = 1; i <= n; i++) {
//             if (curArr.includes(i)) continue;
//             curArr.push(i);
//             helper(curCount, curArr, n, k, res);
//             if (res.length != 0) break;
//             curArr.pop();
//         }
//     }
// }

//借鉴算法，数学求解
var getPermutation = function (n, k) {
    let res = "";
    let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    //用于保存阶乘
    let f = [1];
    for (let i = 1; i < n; i++) {
        f[i] = f[i - 1] * i;
    }
    k -= 1;
    for (let i = n; i >= 1; i--) {
        let j = Math.floor(k / f[i - 1]);
        k %= f[i - 1];
        res += num[j];
        num.splice(j, 1);
    }
    return res;
};
console.log(getPermutation(9, 1231))