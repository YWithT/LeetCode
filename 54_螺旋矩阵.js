/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//自写算法
// var spiralOrder = function (matrix) {
//     if (matrix.length == 0) return [];
//     let visited = [];
//     for (let i = 0; i < matrix.length; i++) {
//         visited.push(new Array(matrix[0].length).fill(0));
//     }
//     let count = matrix.length * matrix[0].length;

//     let res = [matrix[0][0]];
//     visited[0][0] = 1;

//     let arr = ["right", "down", "left", "up"];
//     let state = 0;
//     let i = 0;
//     let j = 0;
//     while (res.length < count) {
//         if (arr[state % 4] == "right" && j + 1 < matrix[0].length && visited[i][j + 1] == 0) {
//             res.push(matrix[i][++j]);
//             visited[i][j] = 1;
//         }
//         else if (arr[state % 4] == "down" && i + 1 < matrix.length && visited[i + 1][j] == 0) {
//             res.push(matrix[++i][j]);
//             visited[i][j] = 1;
//         }
//         else if (arr[state % 4] == "left" && j - 1 >= 0 && visited[i][j - 1] == 0) {
//             res.push(matrix[i][--j]);
//             visited[i][j] = 1;
//         }
//         else if (arr[state % 4] == "up" && i - 1 >= 0 && visited[i - 1][j] == 0) {
//             res.push(matrix[--i][j]);
//             visited[i][j] = 1;
//         }
//         else {
//             state++;
//         }
//     }
//     return res;
// };


//借鉴算法
var spiralOrder = function (matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return [];
    let res = [];
    //创建四个边界
    let up = 0,
        left = 0,
        right = matrix[0].length - 1,
        down = matrix.length - 1;
    while (1) {
        for (let i = left; i <= right; i++) res.push(matrix[up][i]);
        if (++up > down) break;
        for (let i = up; i <= down; i++) res.push(matrix[i][right]);
        if (--right < left) break;
        for (let i = right; i >= left; i--) res.push(matrix[down][i]);
        if (--down < up) break;
        for (let i = down; i >= up; i--) res.push(matrix[i][left]);
        if (++left > right) break;
    }
    return res;
};


console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
]))