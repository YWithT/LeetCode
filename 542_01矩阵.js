

/**
 * @param {number[][]} resMatrix
 * @return {number[][]}
 */

 /**
  * 算法思想：
  * 1. 第一次遍历，将0四周的1全部改为-1；
  * 2. 第二次遍历，将-1四周的1全部改为-2；
  * 3. 以此类推，直到遍历结束后矩阵未发生变化
  * 4. 将矩阵中的值取反并返回
  * 
  * 缺点：多次二重循环，效率不高，BFS算法效率更佳
  */
var updateMatrix = function (matrix) {
    var row = matrix.length;
    var column = matrix[0].length;

    for (let val = 0;; val--) {
        let flag = false;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (matrix[i][j] == val) {
                    flag = changeAround(matrix, val, i, j, row, column) == true ? true : flag;
                }
            }
        }
        if (flag == false) {
            break;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            matrix[i][j] = -matrix[i][j];
        }
    }

    return matrix;
};

function changeAround(matrix, val, i, j, row, column) {
    let flag = false;
    if (i - 1 > -1 && matrix[i - 1][j] == 1) {
        matrix[i - 1][j] = val - 1;
        flag = true;
    }
    if (i + 1 < row && matrix[i + 1][j] == 1) {
        matrix[i + 1][j] = val - 1;
        flag = true;
    }
    if (j - 1 > -1 && matrix[i][j - 1] == 1) {
        matrix[i][j - 1] = val - 1;
        flag = true;
    }
    if (j + 1 < column && matrix[i][j + 1] == 1) {
        matrix[i][j + 1] = val - 1;
        flag = true;
    }
    return flag;
}

let a = [
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
]

let b = updateMatrix(a)

console.log(b);


// function resMatrixIndexof(resMatrix, value) {
//     for (let [index, array] of resMatrix.entries()) {
//         if (array.includes(value)) {
//             return [index, array.indexOf(value)];
//         }
//     };
//     return false;
// }