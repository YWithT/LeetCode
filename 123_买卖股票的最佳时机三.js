/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var profits = [0, 0];
    for (let i = 0, j = 1; j < prices.length;) {
        if (prices[j] <= prices[i]) {
            i++;
            j++;
            continue;
        } else if (prices[j] > prices[i]) {
            if (j == prices.length - 1) {   //添加结尾判断
                if (prices[j] > prices[i]) {
                    profits.push(prices[j] - prices[i]);
                    j++;
                    break;
                }
            }
            for (let k = j + 1; k < prices.length; k++) {
                if (prices[k] >= prices[j]) {
                    j++;
                    continue;
                } else if (prices[k] < prices[j]) {
                    profits.push(prices[j] - prices[i]);
                    i = j;
                    j = k;
                    break;
                }
            }
        }
    }
    profits.sort();
    return profits[profits.length - 1] + profits[profits.length - 2];
};

var a = [1,2,4,2,5,7,2,4,9,0];
console.log(maxProfit(a));