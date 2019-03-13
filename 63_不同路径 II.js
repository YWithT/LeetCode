/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

//自写算法，算法核心   res[i][j] = res[i-1][j] + res[i][j-1]
// var uniquePathsWithObstacles = function (obstacleGrid) {
//     if (obstacleGrid[0][0] === 1) {
//         return 0;
//     }
//     var length = obstacleGrid[0].length;
//     var height = obstacleGrid.length;
//     var res = [
//         [1]
//     ];
//     for (let i = 1; i < height; i++) { //先处理第一列数据
//         if (obstacleGrid[i][0] === 0) {
//             res.push([1]);
//         } else {
//             for (let j = i; j < height; j++) {
//                 res.push([0]);
//             }
//             break;
//         }
//     }
//     for (let i = 0; i < height; i++) {
//         for (let j = 1; j < length; j++) {
//             let sum = 0;
//             sum += (j - 1 >= 0 ? res[i][j - 1] : 0);
//             sum += (i - 1 >= 0 ? res[i - 1][j] : 0);
//             res[i][j] = obstacleGrid[i][j] === 1 ? 0 : sum;
//         }
//     }
//     return res[height - 1][length - 1];
// };

//算法改进，只用一个一维数组进行存储
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    var length = obstacleGrid[0].length;
    var height = obstacleGrid.length;
    var res = [1];
    for (let i = 1; i < length; i++) { //先处理第一行数据
        if (obstacleGrid[0][i] === 0) {
            res.push(1);
        } else {
            for (let j = i; j < length; j++) {
                res.push(0);
            }
            break;
        }
    }
    for (let i = 1; i < height; i++) {
        let sum = 0;
        for (let j = 0; j < length; j++) {
            sum = res[j];
            sum += (j - 1 >= 0 ? res[j - 1] : 0);
            res[j] = obstacleGrid[i][j] === 1 ? 0 : sum;
        }
    }
    return res[length-1];
};


console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]));