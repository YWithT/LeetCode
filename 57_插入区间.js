/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let i = 0;
    while (i < intervals.length) {
        if (newInterval[0] < intervals[i][0]) {
            intervals.splice(i, 0, newInterval);
            break;
        }
        i++;
    }
    if (i == intervals.length) intervals.push(newInterval);
    i = 0;
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

console.log(insert(
    [
        [1, 3],
        [6, 9]
    ],
    [10, 11]
))