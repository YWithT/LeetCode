/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//解法1
// var subsets = function (nums) {
//     let res = [
//         []
//     ];
//     for (let i = 0; i < nums.length; i++) {
//         let resConcat = [];
//         //复制res到resConcat
//         for (let j = 0; j < res.length; j++) {
//             resConcat.push(res[j].concat());
//         }
//         //将resCount中的每个数组添加nums[i]
//         for (let j = 0; j < resConcat.length; j++) {
//             resConcat[j].push(nums[i]);
//         }
//         //将resCount中的每个数组添加进res
//         res.push(...resConcat);
//     }
//     return res;
// };

//解法2，深度优先搜索，原集合中每个数字只有两个状态，存在或者不存在
var subsets = function (nums) {
    let res = [];
    let out = [];
    nums.sort((a, b) => a - b);
    helper(nums, 0, out, res);
    return res;
};

function helper(nums, pos, out, res) {
    res.push(out.concat());
    for (let i = pos; i < nums.length; i++) {
        out.push(nums[i]);
        helper(nums, i + 1, out, res);
        out.pop();
    }
}


console.log(subsets([1, 3, 2]));