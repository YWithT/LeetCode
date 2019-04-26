/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

//解法一： 使用双重循环
var numSubarrayBoundedMax = function (A, L, R) {
    let res = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] > R) continue;
        let curMax = Number.MIN_SAFE_INTEGER;
        for (let j = i; j < A.length; j++) {
            curMax = Math.max(curMax, A[j]);
            if (curMax > R) break;
            if (curMax >= L) res++;
        }
    }
    return res;
}

//解法二
var numSubarrayBoundedMax = function (A, L, R) {
    //所求结果等于A中所有最大值小于等于R的子数组数量-A中所有最大值小于L的子数组数量
    return helper(A, R) - helper(A, L - 1);
}

function helper(A, maxVal) {
    let curLen = 0;
    let res = 0;
    for (let x of A) {
        curLen = (x <= maxVal) ? curLen + 1 : 0;
        res += curLen;
    }
    return res;
}

console.log(numSubarrayBoundedMax([2, 1, 4, 3],
    2, 3))