/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let count = 0;
    let commonSide = 0;
    let height = grid.length;
    if (height == 0)
        return 0;
    let width = grid[0].length;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] == 1) {
                count++;
                if (i - 1 >= 0 && grid[i - 1][j] == 1) commonSide++;
                if (i + 1 < height && grid[i + 1][j] == 1) commonSide++;
                if (j - 1 >= 0 && grid[i][j - 1] == 1) commonSide++;
                if (j + 1 < width && grid[i][j + 1] == 1) commonSide++;
            }
        }
    }
    return 4 * count - commonSide;
};

console.log(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]))