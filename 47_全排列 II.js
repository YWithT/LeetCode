/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function (nums) {
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
//             if (array[i] == array[i - 1])
//                 continue;
//             midArray = arr.concat();
//             midArray.push(array[i]);
//             let nextArray = array.concat();
//             nextArray.splice(i, 1);
//             permuteArray(midArray, res, nextArray);
//         }
//     }
// }



var permuteUnique = function (nums) {
    nums.sort();
    var res = [];
    var midArray = [];
    var visit = new Array(nums.length).fill(0);
    permuteArray(midArray, visit, res, nums);
    return res;
};

function permuteArray(midArray, visit, res, array) {
    if (array.length == midArray.length) {
        res.push(midArray.concat());
    } else {
        for (let i = 0; i < array.length; i++) {
            if (visit[i] == 1) continue;
            if (array[i] == array[i - 1] && visit[i - 1] == 0) continue;
            visit[i] = 1;
            midArray.push(array[i]);
            permuteArray(midArray, visit, res, array);
            visit[i] = 0;
            midArray.pop();
        }
    }
}

a = [2, 2, 2];
console.log(permuteUnique(a));