/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
    let res = []; //存储所有可能的结果
    let used = []; //存储使用过的数字
    for (let i = 0; i < A.length; i++) {
        if (used.indexOf(A[i]) != -1)
            continue;
        else
            used.push(A[i]);
        let countA = 0; //记录需要往A旋转的次数
        let countB = 0; //记录需要往B旋转的次数   
        let j = 0;
        for (; j < A.length; j++) {
            if (A[j] == A[i] && B[j] == A[i]) {
                continue;
            }
            else if (A[j] == A[i] && B[j] != A[i]) {
                countB++;
            }
            else if (A[j] != A[i] && B[j] == A[i]) {
                countA++;
            }
            else {
                break;
            }
        }
        if (j == A.length) {
            res.push(Math.min(countA, countB));
        }
    }
    return res.length == 0 ? -1 : Math.min(...res);
};

console.log(minDominoRotations([1, 2, 3], [2, 0, 2]));