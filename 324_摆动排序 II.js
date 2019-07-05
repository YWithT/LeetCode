/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    nums.sort((a, b) => a - b);
    let arr = nums.concat();
    let i = Math.ceil(nums.length / 2) - 1;
    let j = nums.length - 1;
    let index = 0;
    while (1) {
        if (i >= 0) {
            nums[index] = arr[i];
            index++;
            i--;
        }
        if (j >= Math.ceil(nums.length / 2)) {
            nums[index] = arr[j];
            index++;
            j--;
        }
        if (i <= -1)
            break;
    }
    return;
};

console.log(wiggleSort([1, 5, 1, 1, 6, 4]))