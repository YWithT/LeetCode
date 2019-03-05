/**
 * @param {number[]} nums
 * @return {number}
 */

//第一次写法
// var rob = function (nums) {
//     if (nums.length === 0) {
//         return 0;
//     }
//     if (nums.length < 3) {
//         return Math.max(...nums);
//     }

//     var res = [nums[0], Math.max(nums[0], nums[1])];

//     for (let i = 2; i < nums.length; i++) {
//         res[i] = Math.max(res[i - 1], res[i - 2] + nums[i]);
//     }

//     return res[nums.length - 1];
// };

//内存优化
var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length < 3) {
        return Math.max(...nums);
    }

    var a = nums[0];
    var b = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        [a, b] = [b, Math.max(b, a + nums[i])];
    }

    return b;
};
console.log(rob([1,2,3,1]));