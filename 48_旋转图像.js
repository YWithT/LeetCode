/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//自写算法，需要额外的空间保存变量
var rotate = function (matrix) {
    if (matrix.length == 0 || matrix.length == 1) return;
    let n = matrix.length;
    let res = new Array(n).fill(0).map(x => new Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        let column = n - 1 - i;
        for (let j = 0; j < n; j++) {
            let row = j;
            res[row][column] = matrix[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = res[i][j];
        }
    }
};


//借鉴算法
var rotate = function (matrix) {
    let n = matrix.legnth;
    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - 1 - i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - i][j];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = tmp;
        }
    }
};

let a = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

console.log(rotate(a));