/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let res = new Array(s.length).fill(0);
    let left = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left.push(i);
        }
        else {
            if (left.length != 0) {
                let index = left.pop();
                res[i] = 1;
                res[index] = 1;
            }
        }
    }

    let max = 0,
        k = 0;
    for (let i = 0; i < res.length; i++) {
        if (res[i] == 1) {
            k++;
            max = Math.max(k, max);
        }
        else {
            k = 0;
        }
    }
    return max;
};

console.log(longestValidParentheses(")()())"));