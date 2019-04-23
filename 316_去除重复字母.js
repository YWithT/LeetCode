/**
 * @param {string} s
 * @return {string}
 */
//自写算法，超时
// var removeDuplicateLetters = function (s) {
//     let res = [];
//     let use = [];
//     check(s, res, use);
//     res.sort();
//     return res[0];
// };

// function check(str, res, use) {
//     if (use.indexOf(str) != -1)
//         return;
//     use.push(str);
//     let flag = 1;
//     for (let i = 0; i < str.length; i++) {
//         //若str[i]不唯一
//         let indexs = checkOnly(str, i);
//         if (indexs.length != 1) {
//             flag = 0;
//             let newStr = str.replace(new RegExp(str[i], "g"), "");
//             for (let j = 0; j < indexs.length; j++) {
//                 let nextStr = newStr.slice(0, indexs[j] - j) + str[i] + newStr.slice(indexs[j] - j);
//                 console.log(nextStr);
//                 check(nextStr, res, use);
//             }
//             break;
//         }
//     }
//     if (flag && res.indexOf(str) == -1)
//         res.push(str);


// }

// function checkOnly(str, index) {
//     let indexs = [index];
//     for (let i = index + 1; i < str.length; i++) {
//         if (str[i] == str[index])
//             indexs.push(i);
//     }
//     return indexs;
// }

//借鉴算法
var removeDuplicateLetters = function (s) {
    //新建一个对象记录各字母出现数量
    let m = {};
    //新建一个对象记录字母在res数组中是否已经出现过
    let visited = {};
    //结果字符串，初始化为“0”可以将首字母处理一般化
    let res = "0";
    //遍历s统计各字母次数
    for (let i of s) {
        m[i] ? m[i]++ : m[i] = 1;
    }
    for (let i of s) {
        //遍历到某字母便将该字母数量减1
        m[i]--;
        //如果该字母已经在res中则跳过
        if (visited[i]) continue;
        //当该字母的ascii字符比res中最后一个字符更前且res中最后一个字符的当前数量不为0时
        //数量不为0意味着在后面还可以再次添加，不会遗漏字符
        while (i < res.substring(res.length - 1) && m[res.substring(res.length - 1)]) {
            //将res中最后一个字符移除并且修改visited数组中的对应值
            visited[res.substring(res.length - 1)] = 0;
            res = res.substring(0, res.length - 1);
        }
        //将当前字母存入res，并修改visited数组
        res += i;
        visited[i] = 1;
    }
    //返回将首字符“0”略去的字符串
    return res.substring(1);
}

console.log(removeDuplicateLetters("bcabc"));