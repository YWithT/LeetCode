/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length == 0 || s[0] == '0') return 0;
    let res = new Array(s + 1).fill(0);
    res[0] = 1;
    //在s前加9统一两个s和res的下标
    s = "9" + s;
    for (let i = 1; i < s.length; i++) {
        res[i] = (s[i] == '0') ? 0 : res[i - 1];
        if (s[i - 1] + s[i] <= 26 && s[i - 1] + s[i] >= 10) {
            res[i] += res[i - 2];
        }
    }
    return res.pop();
};

console.log(numDecodings('226'));