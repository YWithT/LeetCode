//借鉴算法
var generateMatrix = function (n) {
    if (n == 0) return [];
    let res = [];
    for (let i = 0; i < n; i++) res.push([]);
    //创建四个边界
    let up = 0,
        left = 0,
        right = n - 1,
        down = n - 1;
    let cur = 1;
    while (1) {
        for (let i = left; i <= right; i++) res[up][i] = cur++;
        if (++up > down) break;
        for (let i = up; i <= down; i++) res[i][right] = cur++;
        if (--right < left) break;
        for (let i = right; i >= left; i--) res[down][i] = cur++;
        if (--down < up) break;
        for (let i = down; i >= up; i--) res[i][left] = cur++;
        if (++left > right) break;
    }
    return res;
};

console.log(generateMatrix(1));