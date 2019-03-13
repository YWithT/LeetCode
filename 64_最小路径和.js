/**
 * @param {number[][]} grid
 * @return {number}
 */
//初级动态规划，
//使用二维数组存储时的状态转移方程    res[i][j] = min{res[i][j-1],res[i-1][j-1]} + grid[i][j]
var minPathSum = function (grid) {
    var length = grid[0].length;
    var height = grid.length;
    var res = [grid[0][0]]

    for (let i = 1; i < length; i++) { //处理第一行数据
        res[i] = res[i - 1] + grid[0][i];
    }

    for (let i = 1; i < height; i++) {
        for (let j = 0; j < length; j++) {
            if (j - 1 > -1) {
                res[j] = Math.min(res[j - 1], res[j]) + grid[i][j];
            } else {
                res[j] = res[j] + grid[i][j];
            }
        }
    }
    return res[length - 1];
};

console.log(minPathSum(
        [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1]
        ]
    )
)