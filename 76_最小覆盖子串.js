/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// function getSet(Obj) {
//     let res = [];
//     for (let attr in Obj) {
//         res.push(...Obj[attr]);
//     }
//     return res;
// }

// function checkObj(Obj) {
//     for (let attr in Obj) {
//         if (Obj[attr].includes(-1))
//             return false;
//     }
//     return true;
// }
// //自写算法
// var minWindow = function (s, t) {
//     var tObj = {};
//     for (let i = 0; i < t.length; i++) {
//         if (tObj[t[i]] == undefined) {
//             let count = 1;
//             for (let j = i + 1; j < t.length; j++) {
//                 if (t[j] == t[i]) count++;
//             }
//             tObj[t[i]] = new Array(count).fill(-1);
//         }
//     }
//     let start = 0;
//     while (start <= s.length) {
//         if (tObj[s[start]]) {
//             tObj[s[start]].push(start);
//             tObj[s[start]].shift();
//         }
//         //检测对象的所有数组中是否依然含有-1，若已经不含有-1则break
//         if (checkObj(tObj)) break;
//         start++;
//     }
//     //检测对象的所有数组中是否依然含有-1，若有则表示不存在这样的子串
//     if (!checkObj(tObj)) return "";

//     let set = getSet(tObj);
//     let [left, right] = [Math.min(...set), Math.max(...set)];
//     let res = [left, right];
//     start++;
//     while (start <= s.length) {
//         if (tObj[s[start]]) {
//             if (s[start] == s[left]) {
//                 tObj[s[start]].push(start);
//                 tObj[s[start]].shift();
//                 set = getSet(tObj);
//                 [left, right] = [Math.min(...set), Math.max(...set)];
//                 if (right - left < res[1] - res[0])
//                     res = [left, right];
//             }
//             else {
//                 tObj[s[start]].push(start);
//                 tObj[s[start]].shift();
//             }
//         }
//         start++;
//     }

//     return s.slice(res[0], res[1] + 1);
// }

//借鉴算法
var minWindow = function (s, t) {
    let tObj = {};
    for (let word of t) {
        if (tObj[word] == undefined)
            tObj[word] = 1;
        else {
            tObj[word]++;
        }
    }
    let left = 0,
        cnt = 0,
        minLen = Number.MAX_SAFE_INTEGER,
        res = "";
    for (let i = 0; i < s.length; i++) {
        if (--tObj[s[i]] >= 0) cnt++;
        while (cnt == t.length) {
            if (minLen > i - left + 1) {
                minLen = i - left + 1;
                res = s.substr(left, minLen);
            }
            if (++tObj[s[left]] > 0) cnt--;
            left++;
        }
    }
    return res;
};
let S = "ADOBBBACODEBANC",
    T = "ABBC"
console.log(minWindow(S, T));