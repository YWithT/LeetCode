/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//使用数组保存中间值，可以处理负数的情况
//midArray:保存前序列值
//res:保存最终数组序列
//array:剩余数的集合
//算法思想：使用递归方法，从array中依次取出各值加入前序列，直到剩余数的集合为空
var permute = function (nums) {
    nums.sort();
    var res = [];
    var midArray = [];
    permuteArray(midArray, res, nums);
    return res;
};

function permuteArray(midArray, res, array) {
    if (array.length == 0) {
        res.push(midArray);
    } else {
        let arr = midArray.concat();
        for (let i = 0; i < array.length; i++) {
            midArray = arr.concat();
            midArray.push(array[i]);
            let nextArray = array.concat();
            nextArray.splice(i, 1);
            permuteArray(midArray, res, nextArray);
        }
    }
}

permute([-1, 2, 3, 4])