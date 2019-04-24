/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let index = 0;
    let res = [];
    for (; index < arr.length - 1; index++) {
        if (arr[index] >= x)
            break;
    }
    let left = index - 1;
    let right = index;
    while (k) {
        if (arr[right] === undefined) {
            res.push(arr[left]);
            left--;
        }
        else if (arr[left] === undefined) {
            res.push(arr[right]);
            right++;
        }
        else {
            if (Math.abs(arr[right] - x) >= Math.abs(arr[left] - x)) {
                res.push(arr[left]);
                left--;
            }
            else {
                res.push(arr[right]);
                right++;
            }
        }
        k--;
    }
    res.sort((a, b) => a - b);
    return res;
};

console.log(findClosestElements([0, 1, 1, 1, 2, 3, 6, 7, 8, 9], 9, -1));