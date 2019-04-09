/**
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function (A) {
    A.sort(ascending);
    var visit = new Array(A.length).fill(0);
    var count = [0];
    var res = [];
    check(A, visit, res, count);
    return count[0];
};

function ascending(a, b) {
    return a - b;
}

function check(A, visit, res, count) {
    if (res.length == A.length) {
        count[0]++;
        return;
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i] == A[i - 1] && visit[i - 1] == 0) continue; //防止出现重复排列
        if (visit[i] == 0) {
            let val = res.length == 0 ? 1 : Math.sqrt(A[i] + res[res.length - 1]); //当res长度不为1时检查是否满足题目要求
            if (val === Math.floor(val)) {
                visit[i] = 1;
                res.push(A[i]);
                check(A, visit, res, count);
                visit[i] = 0;
                res.pop();
            }
        }
    }
}

A = [2, 2, 2]
console.log(numSquarefulPerms(A));