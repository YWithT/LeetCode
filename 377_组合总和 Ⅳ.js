/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//DFS算法，超时
// var combinationSum4 = function (nums, target) {
//     nums.sort((a, b) => a - b);
//     let res = [0];
//     helper([], nums, target, res);
//     return res[0];
// };

// function helper(cur, nums, target, res) {
//     if (target == 0) {
//         res[0]++;
//         return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (target - nums[i] < 0) break;
//         cur.push(nums[i]);
//         helper(cur, nums, target - nums[i], res);
//         cur.pop();
//     }
// }


//动态规划算法
// var combinationSum4 = function (nums, target) {
//     nums.sort((a, b) => a - b);
//     let res = [1];
//     for (let i = 1; i <= target; i++) {
//         helper(nums, i, res);
//     }
//     return res[target];
// };

// function helper(nums, target, res) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (target - nums[i] < 0) break;
//         sum += res[target - nums[i]];
//     }
//     res[target] = sum;
// }


//改进写法
var combinationSum4 = function (nums, target) {
    nums.sort((a, b) => a - b);

    let res = new Array(target + 1).fill(0);
    res[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] < 0) break;
            res[i] += res[i - nums[j]];
        }
    }
    return res[target];
};

console.log(combinationSum4([1, 2, 3], 35))