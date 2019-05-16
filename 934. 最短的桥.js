/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function (A) {
    if (A.length == 0 || A[0].length == 0) return 0;
    let flag = 0;
    let res = 0;
    let arr = [];
    //通过循环给两个岛屿分组，把找到的第一个岛屿的“1”全部修改为“2”
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] == 1) {
                helper(A, i, j, arr);
                //由于只有两个岛屿，所以找到一次岛屿即可退出循环
                flag = 1;
                break;
            }
        }
        if (flag) break;
    }
    let nextArr = []
    //遍历2号岛屿的坐标，一圈圈扩散，一直到找到1号岛屿为止
    while (arr.length != 0) {
        let [i, j] = arr.shift();
        //通过双重循环遍历(i,j)的周围坐标
        for (let k = -1; k <= 1; k++) {
            for (let l = -1; l <= 1; l++) {
                //不考虑斜线和(i,j)本身
                if ((k != 0 && l != 0) || (k == 0 && l == 0)) continue;
                //去掉超出范围的值
                if (i + k < 0 || i + k >= A.length || j + l < 0 || j + l >= A[0].length)
                    continue;
                //若找到1号岛屿则返回
                if (A[i + k][j + l] == 1) {
                    flag = 1;
                    return res;
                }
                //若为0则修改其值为2并将其加入nextArr
                if (A[i + k][j + l] == 0) {
                    A[i + k][j + l] = 2;
                    nextArr.push([i + k, j + l])
                }
            }
        }
        //当arr已全部出队列时
        if (arr.length == 0) {
            res++;
            arr = nextArr;
            nextArr = [];
        }
    }
    return res;
};

function helper(A, i, j, arr) {
    if (i >= 0 && i < A.length && j >= 0 && j < A[0].length && A[i][j] == 1) {
        A[i][j] = 2;
        arr.push([i, j]);
        helper(A, i - 1, j, arr);
        helper(A, i + 1, j, arr);
        helper(A, i, j + 1, arr);
        helper(A, i, j - 1, arr);
    }
}


console.log(shortestBridge([
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]))