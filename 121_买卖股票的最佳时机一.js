/**
 * @param {number[]} prices
 * @return {number}
 */

 //暴力法
// var maxProfit = function(prices) {
//     var maxVal = 0;
//     for(let i=0;i<prices.length;i++){
//         for(let j=i+1;j<prices.length;j++){
//             if(prices[j]-prices[i]>maxVal){
//                 maxVal = prices[j]-prices[i];
//         }
//         }
//     }
//     return maxVal;
// };

//动态规划    前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
var maxProfit = function(prices) {
    var maxPro = 0;
    var minVal = 9999999999;
    for(let i in prices){
        if(prices[i]-minVal>maxPro){    //若第i天价格-前i-1天中的最小价格大于当前的最大利润
            maxPro = prices[i] - minVal;
        }
        if(prices[i] < minVal){         //若第i天价格小于前i-1天中的最小价格
            minVal = prices[i];
        }
    }
    return maxPro;
};
console.log(maxProfit([7,1,5,3,6,4]))