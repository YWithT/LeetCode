/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

//自写算法
// var wordBreak = function (s, wordDict) {
//     let res = [false];
//     let used = [s];
//     helper(1, s, wordDict, used, res);
//     return res[0];
// };

// function helper(index, s, wordDict, used, res) {
//     if (res[0] == true) return;
//     if (s.length == 0) {
//         res[0] = true;
//         return;
//     }
//     if (wordDict.includes(s.slice(0, index))) {
//         if (!used.includes(s.slice(index))) {
//             used.push(s.slice(index));
//             helper(1, s.slice(index), wordDict, used, res);
//         }
//         helper(index + 1, s, wordDict, used, res);
//     }
//     else if (index + 1 > s.length) return;
//     else {
//         helper(index + 1, s, wordDict, used, res);
//     }
// }


//借鉴算法
var wordBreak = function (s, wordDict) {
    let memo = new Array(s.length).fill(-1);
    return check(s, wordDict, 0, memo);
};

function check(s, wordDict, start, memo) {
    if (start >= s.length) return true;
    if (memo[start] != -1) return memo[start];
    for (let i = start + 1; i <= s.length; i++) {
        if (wordDict.includes(s.slice(start, i)) && check(s, wordDict, i, memo)) {
            return memo[start] = 1;
        }
    }
    return memo[start] = 0;
}

let s = "aaaaaaaa"
let wordDict = ["aaa", "aaaa"]
console.log(wordBreak(s, wordDict));
//console.log("aa".repeat(2));
//console.log(wordDict);