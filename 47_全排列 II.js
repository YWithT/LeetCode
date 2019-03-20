/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
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
            if (array[i] == array[i - 1])
                continue;
            midArray = arr.concat();
            midArray.push(array[i]);
            let nextArray = array.concat();
            nextArray.splice(i, 1);
            permuteArray(midArray, res, nextArray);
        }
    }
}

a=[];
console.log(permuteUnique(a));