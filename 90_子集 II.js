/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
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
        while (i + 1 < nums.length && nums[i] == nums[i + 1]) ++i;
    }
}

console.log(subsetsWithDup([1, 2, 2]));