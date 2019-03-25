/**
 * @param {number} n
 * @return {number}
 */
//基础版： 使用C[] 来保存每行皇后所在的位置， C[n] 即为第n行皇后所在的位置
var totalNQueens = function (n) {
    var res = [0];
    var C = [];
    computeNQueens(n, 0, C, res);
    return res[0];
};

function computeNQueens(n, cur, C, res) {
    if (cur == n) {
        res[0]++;
        return;
    }
    for (let i = 0; i < n; i++) {
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

//改进版，使用二维数组C[][]直接判断当前尝试的皇后所在列和两个对角线是否有其他皇后
var totalNQueens = function (n) {
    var res = [0];
    var C = [
        [], //用于垂直判断
        [], //用于主对角线判断
        [] //用于副对角线判断
    ];
    computeNQueens(n, 0, C, res);
    return res[0];
};

function computeNQueens(n, cur, C, res) {
    if (cur == n) {
        res[0]++;
        return;
    }
    for (let i = 0; i < n; i++) {
        if (!C[0][i] && !C[1][cur - i + n] && !C[2][cur + i]) {
            C[0][i] = C[1][cur - i + n] = C[2][cur + i] = 1;
            computeNQueens(n, cur + 1, C, res);
            C[0][i] = C[1][cur - i + n] = C[2][cur + i] = 0;
        }
    }
}

console.log(totalNQueens(8))