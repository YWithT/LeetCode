/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var res = [];
    generateParenthesisDFS(n, n, "", res);
    return res;
};

function generateParenthesisDFS(left, right, str, res) {
    if (left > right) return;
    if (left == 0 && right == 0) {
        res.push(str);
    } else {
        if (left > 0) generateParenthesisDFS(left - 1, right, str + "(", res);
        if (right > 0) generateParenthesisDFS(left, right - 1, str + ")", res);
    }
}

console.log(generateParenthesis(10));