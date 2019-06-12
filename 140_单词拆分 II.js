/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

//自写算法
// var wordBreak = function (s, wordDict) {
//     let res = [];
//     let sUsed = [s];
//     let used = [];
//     helper(1, s, wordDict, used, sUsed, res);
//     return res;
// };

// function helper(index, s, wordDict, used, sUsed, res) {
//     if (s.length == 0) {
//         res.push(used.join(" "));
//         return;
//     }
//     if (wordDict.includes(s.slice(0, index))) {
//         used.push(s.slice(0, index));
//         helper(1, s.slice(index), wordDict, used, sUsed, res);
//         used.pop();
//     }
//     if (index + 1 > s.length) return;
//     else {
//         helper(index + 1, s, wordDict, used, sUsed, res);
//     }
// }


// var wordBreak = function (s, wordDict) {
//     let res = [];
//     let used = [];
//     helper(s, wordDict, used, res);
//     return res;
// };

// function helper(s, wordDict, used, res) {
//     if (s.length == 0) {
//         res.push(used.join(" "));
//         return;
//     }
//     for (let word of wordDict) {
//         if (s.slice(0, word.length) != word) continue;
//         used.push(s.slice(0, word.length));
//         helper(s.slice(word.length), wordDict, used, res);
//         used.pop();
//     }
// }

var wordBreak = function (s, wordDict) {
    let m = {};
    let res = helper(s, wordDict, m)
    return res;
};

function helper(s, wordDict, m) {
    if (m[s] != undefined) return m[s];
    if (s.length == 0) return [""];
    let res = [];
    for (let word of wordDict) {
        if (s.slice(0, word.length) != word) continue;
        let rem = helper(s.slice(word.length), wordDict, m);
        for (let str of rem) {
            res.push(word + (str.length == 0 ? "" : " ") + str);
        }
    }
    return m[s] = res;
}


s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]

console.log(wordBreak(s, wordDict));