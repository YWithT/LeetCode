/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//自写算法 制造差值数组并遍历，看能否从某个起点跑完一圈
var canCompleteCircuit = function (gas, cost) {
    var difference = [];
    for (let i = 0; i < gas.length; i++) {
        difference[i] = gas[i] - cost[i];
    }
    for (let i = 0; i < difference.length; i++) {
        let remainGas = 0;
        for (let k = i, count = 0; count < difference.length; count++) {
            remainGas += difference[k];
            if (remainGas < 0) {
                break;
            }
            k = k + 1 == difference.length ? 0 : k + 1; //若抵达数组末尾则返回下标0
            if (count == difference.length - 1) {
                return i;
            }
        }
    }
    return -1;
};

//借鉴算法
var canCompleteCircuit = function (gas, cost) {
    let total = 0;
    let sum = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        sum += gas[i] - cost[i];
        if (sum < 0) {
            start = i + 1;
            sum = 0;
        }
    }
    return total < 0 ? -1 : start;  //若total<0说明总油量小于总消耗，无法跑完全程
};


gas = [2, 3, 4];
cost = [3, 4, 3];
console.log(canCompleteCircuit(gas, cost));