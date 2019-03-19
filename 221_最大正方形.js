/**
 * @param {character[][]} matrix
 * @return {number} 
 */
var maximalSquare = function (matrix) {
    if (matrix.length == 0)
        return 0;
    var matrixHeight = matrix.length;
    var matrixLength = matrix[0].length;
    var maxArea = 0;

    for (let i = 0; i < matrixHeight; i++) {
        for (let j = 0; j < matrixLength; j++) {
            if (matrix[i][j] == 1) {
                for (let k = 0;; k++) {
                    if (checkMatrix(matrix, i, j, k)) {
                        curArea = (k + 1) ** 2;
                        maxArea = Math.max(curArea, maxArea);
                    } else {
                        break;
                    }
                }
            }
        }
    }
    return maxArea;
};

function checkMatrix(matrix, x, y, k) {
    if (x + k >= matrix.length || y + k >= matrix[0].length) { //检验是否超出边界
        return false;
    }
    for (let i = x; i <= x + k; i++) { //检验第y+k列
        if (matrix[i][y + k] == 0)
            return false;
    }
    for (let j = y; j <= y + k; j++) { //检验第x+k行
        if (matrix[x + k][j] == 0)
            return false;
    }
    return true;
}

var matrix = [
    ["0", "0", "0", "1"],
    ["1", "1", "0", "1"],
    ["1", "1", "1", "1"],
    ["0", "1", "1", "1"],
    ["0", "1", "1", "1"]
];
console.log(maximalSquare(matrix));