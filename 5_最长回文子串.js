/**
 * @param {string} s
 * @return {string}
 */

//自写算法
// var longestPalindrome = function (s) {
//     var result = ['', 0]
//     for (let i = 0; i < s.length * 2 - 1; i++) {
//         if (i % 2 == 0) {
//             let res = check(s[i / 2], i, s);
//             if (res[1] > result[1]) {
//                 result = res;
//             }
//         } else {
//             let res = check(s.slice((i - 1) / 2, (i + 3) / 2), i, s);
//             if (res[1] > result[1]) {
//                 result = res;
//             }
//         }
//     }
//     return result[0];
// };

// function check(str, start, s) {
//     let res = str;
//     let maxLength = str.length;
//     let left = 0;
//     let right = 0;
//     if (str.length == 2) {
//         if (str[0] !== str[1]) {
//             return ['', 0];
//         } else {
//             left = (start - 3) / 2;
//             right = (start + 3) / 2;
//         }
//     } else {
//         left = start / 2 - 1;
//         right = start / 2 + 1;
//     }
//     while (left >= 0 && right < s.length) {
//         if (s[left] === s[right]) {
//             res = s[left] + res + s[right];
//             maxLength = Math.max(maxLength, res.length);
//             left--;
//             right++;
//         } else {
//             break;
//         }
//     }
//     return [res, maxLength];
// }


//借鉴写法
var longestPalindrome = function (s) {
    if(s.length === 0){
        return '';
    }
    var res = [s[0], 1]
    for (let i = 0; i < s.length; i++) {
        check(s, i, i, res);
        check(s, i, i + 1, res);
    }
    return res[0];
};

function check(str, left, right, res) {
    while (left >= 0 && right < str.length && str[left] == str[right]) {
        left--;
        right++;
    }
    let strLength = right - left - 1;
    if (strLength > res[1]) {
        res[0] = str.slice(left + 1, right);
        res[1] = strLength;
        //res = [str.slice(left, right + 1), strLength];  //此处直接用对象给res赋值则修改了res的指针指向，脱离了函数外的指向
    }
}


console.log(longestPalindrome('aaaa'))