/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    var time = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        if (timeSeries[i] + duration >= timeSeries[i + 1]) {
            time += timeSeries[i + 1] - timeSeries[i];
        } else {
            time += duration;
        }
    }
    return time;
};

timeSeries = [1, 2];
duration = 2;
console.log(findPoisonedDuration(timeSeries, duration));