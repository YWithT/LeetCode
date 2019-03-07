/**
 * @param {number[]} nums
 * @return {boolean}
 */
//自写贪心算法
var canJump = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    var maxDistance = 0;
    for (let i = 0; i <= maxDistance; i++) {
        if (nums[i] + i > maxDistance) {
            maxDistance = nums[i] + i;
        }
        if (i == nums.length - 1) {
            return true;
        }
    }
    return false;
};