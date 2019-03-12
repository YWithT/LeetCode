/**
 * @param {number[]} ratings
 * @return {number}
 */

//本算法正确但超时
// var candy = function (ratings) {
//     var res = [];
//     for (let i = 0; i < ratings.length; i++) {
//         res[i] = 1;
//     }
//     for (let i = 0; i < ratings.length; i++) {
//         if (i == 0) {
//             if (ratings[i] > ratings[i + 1] && res[i] <= res[i + 1]) {
//                 res[i] += 1;
//                 i = -1;
//             }
//         } else if (i == ratings.length - 1) {
//             if (ratings[i] > ratings[i - 1] && res[i] <= res[i - 1]) {
//                 res[i] += 1;
//                 i = -1;
//             }
//         } else {
//             if((ratings[i]>ratings[i-1] && res[i]<=res[i-1]) || (ratings[i]>ratings[i+1] && res[i]<=res[i+1])){
//                 res[i] += 1;
//                 i = -1;
//             }
//         }
//     }
//     return res.reduce(function (pre, cur) {
//         return pre + cur;
//     })
// };

/**
 * @param {number[]} ratings
 * @return {number}
 */

 //往右延伸算法，当右边的数递减时可以往右边延伸，例如2,1,0,3,4,3,2,1.第一个2可以往右边延伸两位，第一个3延伸0位，第一个4延伸3位。
 //延伸的长度作为获得糖果数的依据之一
var candy = function (ratings) {
    var res = [];
    for (let i = 0; i < ratings.length; i++) {
        res[i] = 1;
    }
    for (let i = 0; i < ratings.length; i++) {
        let rightLength = 0;              //初始化延伸长度
        for (let j = i + 1; j < ratings.length; j++) {      //计算可以往右边延伸的最大长度
            if (ratings[j - 1] > ratings[j]) {
                rightLength++;
            } else {
                break;
            }
        }
        if (ratings[i] > ratings[i - 1]) {      //下标为i的值大于下标为i-1的值，取延伸长度和res[i-1]中的较大值
            res[i] += Math.max(rightLength, res[i - 1])     
        } else {
            res[i] += rightLength;              //下标为i的值小于或等于下标为i-1的值时，只需考虑右边的情况
        }
    }
    return res.reduce(function (pre, cur) {
        return pre + cur;               //求和返回
    })
};

console.log(candy([1,2,2]))