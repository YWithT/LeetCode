/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    if (nums.length == 0) {
        return -1;
    }
    var arraySum = nums.reduce(function (prev, cur) {        //数组求和
        return prev + cur;
    })
    var leftSum = 0;            //统计遍历过的值
    for (var i in nums) {           //从左往右遍历
        if ((arraySum - nums[i]) / 2 == leftSum) {          //若数组总和减去当前值的一半等于左边的值则返回索引
            return i;
        }else {
            leftSum += nums[i];
        }
    }
    return -1;
};

console.log(pivotIndex([-1,-1,-1,-1,-1,0]))