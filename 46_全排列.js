/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//使用数组保存中间值，可以处理负数的情况
//midArray:保存前序列值
//res:保存最终数组序列
//array:剩余数的集合
//算法思想：使用递归方法，从array中依次取出各值加入前序列，直到剩余数的集合为空
// var permute = function (nums) {
//     nums.sort();
//     var res = [];
//     var midArray = [];
//     permuteArray(midArray, res, nums);
//     return res;
// };

// function permuteArray(midArray, res, array) {
//     if (array.length == 0) {
//         res.push(midArray);
//     } else {
//         let arr = midArray.concat();
//         for (let i = 0; i < array.length; i++) {
//             midArray = arr.concat();
//             midArray.push(array[i]);
//             let nextArray = array.concat();
//             nextArray.splice(i, 1);
//             permuteArray(midArray, res, nextArray);
//         }
//     }
// }


//借鉴算法，使用visited数组作为标记，省去大量的数组增删操作
function permute(nums) {
    nums.sort();
    var visited = new Array(nums.length).fill(0); //标记数组，若该数已被使用则标1，未使用标0
    var res = [];
    var curArray = [];
    helper(nums, visited, curArray, res);
    return res;
}

function helper(nums, visited, curArray, res) {
    if (curArray.length == nums.length) {
        res.push(curArray.concat());
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (visited[i] == 0) {
            visited[i] = 1;
            curArray.push(nums[i]);
            helper(nums, visited, curArray, res);
            visited[i] = 0;
            curArray.splice(-1, 1);
        }
    }
}

console.log(permute([1, 2, 3]))