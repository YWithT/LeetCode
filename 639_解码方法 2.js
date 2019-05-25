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
        if (s[i] == '0') {
            res[i] = 0;
            if (s[i - 1] == '*') {
                res[i] += res[i - 2] * 2;
            }
            else if (s[i - 1] + s[i] <= 26 && s[i - 1] + s[i] >= 10) {
                res[i] += res[i - 2];
            }
        }
        else if (s[i] == '*') {
            res[i] = res[i - 1] * 9;
            if (s[i - 1] == '*') {
                res[i] += res[i - 2] * 15;
            }
            else if (s[i - 1] == '1') {
                res[i] += res[i - 2] * 9;
            }
            else if (s[i - 1] == '2') {
                res[i] += res[i - 2] * 6;
            }
        }
        else {
            res[i] = res[i - 1];
            if (s[i - 1] == '*') {
                if (s[i] > 6) {
                    res[i] += res[i - 2];
                }
                else if (s[i] <= 6) {
                    res[i] += res[i - 2] * 2;
                }
            }
            if (s[i - 1] + s[i] <= 26 && s[i - 1] + s[i] >= 10) {
                res[i] += res[i - 2];
            }
        }
        res[i] = res[i] % (Math.pow(10, 9) + 7);
    }
    return res.pop();
};

console.log(numDecodings('"********************"'))