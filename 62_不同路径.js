/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var minVal = Math.min(m, n);
    var sum = 1;
    var denom = 1;
    for (let i = 1; i < minVal; i++) {
        sum *= m + n - 1 - i;
        denom *= i;
    }
    return sum / denom;
};

console.log(uniquePaths(4, 4))