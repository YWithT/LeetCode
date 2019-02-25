/**
 * @param {number[]} prices
 * @return {number}
 */

//借鉴写法
/**
 * 算法思想:只需要从第二天开始，如果当前价格比之前价格高，则把差值加入利润中，因为我们可以昨天买入，今日卖出，
 * 若明日价更高的话，还可以今日买入，明日再抛出。以此类推，遍历完整个数组后即可求得最大利润。 
 * */
var maxProfit = function (prices) {
    var profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};
var a = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(a));







//自己的写法，想的比较复杂，写法较丑
//算法思想：制定3个下标i，j=i+1，k=j+1，k用来探测，如果下标k的值比下标j的值小，则计算当前利润，并在下一天买入
//若下一位的值比下标j的值大则j和k加1.再重复上述步骤
var maxProfit = function (prices) {
    var profit = 0;
    for (let i = 0, j = 1; j < prices.length;) {
        if (prices[j] <= prices[i]) {
            i++;
            j++;
            continue;
        } else if (prices[j] > prices[i]) {
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
            } else {
                profit += prices[j] - prices[i];
                j++;
            }
        }
    }
    return profit;
};
