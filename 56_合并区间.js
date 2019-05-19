/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length == 0 || intervals.length == 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while (i < intervals.length - 1) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i + 1][0] = intervals[i][0];
            intervals[i + 1][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
            intervals.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return intervals;
};

console.log(merge([
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6]
]))