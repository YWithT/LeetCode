/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 0) return 0;
    let res = [nums[0]];
    for (i = 1; i < nums.length; i++) {
        if (res[i - 1] >= 0)
            res[i] = nums[i] + res[i - 1];
        else
            res[i] = nums[i];
    }
    return Math.max(...res);
};