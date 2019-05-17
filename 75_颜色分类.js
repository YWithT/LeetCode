/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//本题在完成时发现我的本地输出和网站的输出一直对不上，后来细看题目发现题目要求
//原地排序，即直接对num进行修改，所以本题也无需返回值。
var sortColors = function (nums) {
    let res = new Array(3).fill(0);
    for (let i = 0; i < nums.length; i++) {
        res[nums[i]]++;
    }
    let j = 0;
    for (let i = 0; i < 3; i++) {
        while (res[i] > 0) {
            nums[j++] = i;
            res[i]--;
        }
    }
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))