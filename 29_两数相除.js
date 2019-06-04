/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let min = -2 << 30;
    let max = 2 << 29;
    max = max + max - 1;
    let flagA = dividend > 0 ? 1 : -1;
    let flagB = divisor > 0 ? 1 : -1;
    dividend = dividend < 0 ? -dividend : dividend;
    divisor = divisor < 0 ? -divisor : divisor;
    let arr = [divisor];
    let res = 0;
    while (1) {
        let flag = 0;
        for (let i = 0; i < arr.length; i++) {
            if (dividend - arr[i] >= 0) {
                dividend -= arr[i];
                if (arr[i + 1] == undefined) {
                    arr[i + 1] = arr[i] + arr[i];
                }
                res += 1 << i;
            }
            else if (dividend - arr[i] < 0 && i == 0) {
                flag = 1;
                break;
            }
            else {
                i = -1;
            }
        }
        if (flag)
            break;
    }
    if (flagA + flagB == 0)
        res = -res;
    if (res < min || res > max)
        return max
    else
        return res;

};

console.log(divide(-2147483648, 1))