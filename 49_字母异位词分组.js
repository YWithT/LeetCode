/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//     let res = [];
//     for (let str of strs) {
//         let flag = 1;
//         let str1 = str.split('').sort().join("");
//         for (let j = 0; j < res.length; j++) {
//             if (str1 == res[j][0]) {
//                 res[j].push(str);
//                 flag = 0;
//             }
//         }
//         if (flag) {
//             res.push([str1, str]);
//         }
//     }
//     res.map(x => x.shift());
//     return res;
// };

var groupAnagrams = function (strs) {
    let res = {};
    for (let str of strs) {
        let str1 = str.split('').sort().join("");
        if (res[str1])
            res[str1].push(str);
        else
            res[str1] = [str];
    }
    let result = [];
    for (let i in res) {
        result.push(res[i]);
    }
    return result;
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs));