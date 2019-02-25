/**
 * @param {number[]} prices
 * @return {number}
 */


 //自己的写法，太丑了
var maxProfit = function (prices) {
    var profit = 0;
    for (let i = 0, j = 1; j < prices.length;) {
        if (prices[j] <= prices[i]) {
            i++; j++; continue;
        }
        else if (prices[j] > prices[i]) {
            if (j + 1 < prices.length) {
                for (let k = j + 1; k < prices.length; k++) {
                    if (prices[k] < prices[j]) {
                        profit += prices[j] - prices[i];
                        i = k;
                        j = k + 1;
                        break;
                    } else {
                        if (k === prices.length - 1) {
                            profit += prices[k] - prices[i];
                            i = k;
                            j = k;
                        }
                        j = k;
                        continue;
                    }
                }
            }
            else {
                profit += prices[j] - prices[i];
                j++;
            }
        }
    }
    return profit;
};

var a = [7,1,5,3,6,4];
console.log(maxProfit(a));