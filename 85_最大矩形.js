/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return 0;
    let visited = new Array(matrix.length).fill(0).map(x => new Array(matrix[0].length).fill(0));
    let maxArea = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 1) {
                maxArea = Math.max(maxArea, helper(i, j, matrix, visited));
            }
        }
    }
    return maxArea;
};

function helper(row, column, matrix, visited) {
    let maxArea = 0;
    let maxHeight = row;
    let maxWidth = column;
    //求出最大高和宽
    while (maxHeight < matrix.length && matrix[maxHeight][column] == 1) {
        maxHeight++;
    }
    while (maxWidth < matrix[0].length && matrix[row][maxWidth] == 1) {
        maxWidth++;
    }
    for (let i = row; i < maxHeight; i++) {
        for (let j = column; j < maxWidth; j++) {
            if (matrix[i][j] == 1) {
                newMaxArea = (i - row + 1) * (j - column + 1);
                if (newMaxArea > maxArea) {
                    maxArea = newMaxArea;
                }
            }
            else {
                maxWidth = j;
                break;
            }
        }
    }
    return maxArea;
}

matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]

console.log(maximalRectangle(matrix));