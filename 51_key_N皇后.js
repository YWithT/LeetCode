/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    var res = [];
    var C = [];
    computeNQueens(n, 0, C, res);
    return res;
};

function computeNQueens(n, cur, C, res) {
    if (cur == n) {
        let img = []
        for (let i = 0; i < C.length; i++) {
            img.push(getImg(C[i], n));
        }
        res.push(img.concat());
    }
    for (let i = 0; i < n; i++) {
        if (cur >= n) break; //在实际运行中，若不加此判断则会产生一行冗余数据，影响绘图。
        var flag = 1;
        C[cur] = i;
        for (let j = 0; j < cur; j++) {
            if (C[cur] == C[j] || C[cur] - cur == C[j] - j || C[cur] + cur == C[j] + j) {
                flag = 0;
                break;
            }
        }
        if (flag)
            computeNQueens(n, cur + 1, C, res);
    }
}

function getImg(index, n) {
    let res = ".".repeat(index) + "Q" + ".".repeat(n - index - 1);
    return res;
}


console.log(solveNQueens(4))