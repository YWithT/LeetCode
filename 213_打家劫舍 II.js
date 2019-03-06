/**
 * @param {number[]} nums
 * @return {number}
 */

 //根据198题打家劫舍改写
var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length < 4) {
        return Math.max(...nums);
    }

    var a = nums[0];
    var b = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length - 1; i++) {
        [a, b] = [b, Math.max(b, a + nums[i])];
    }

    var c = nums[1];
    var d = Math.max(nums[1],nums[2]);
    for (let i = 3; i < nums.length; i++) {
        [c, d] = [d, Math.max(d, c + nums[i])];
    }
    return Math.max(b,d);
};

//语法优化
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    return Math.max(robMax(nums.slice(1)), robMax(nums.slice(0, nums.length - 1)));
};

function robMax(nums) {
    let dp = [0, nums[0]];
    for(let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }
    return dp[nums.length];
}


console.log(rob([1,2,3,1]))