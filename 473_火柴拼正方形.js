/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function (nums) {
    if (nums.length < 4) return false;

    let sum = nums.reduce((pre, cur) => pre + cur);
    //若边长总和不能被4整除，返回false
    if (sum % 4 != 0) return false;

    nums.sort((a, b) => b - a);
    let sums = new Array(4).fill(0);
    return checkSquare(sum / 4, 0, nums, sums);
};

function checkSquare(sideLength, pos, nums, sums) {
    if (pos >= nums.length)
        return sums[0] == sideLength && sums[1] == sideLength && sums[2] == sideLength;
    for (let i = 0; i < 4; i++) {
        if (sums[i] + nums[pos] > sideLength) continue;
        sums[i] += nums[pos];
        if (checkSquare(sideLength, pos + 1, nums, sums)) return true;
        sums[i] -= nums[pos];
    }
    return false;
}

console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]))