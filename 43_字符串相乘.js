/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let arr1 = [];
    [num1, num2] = num1.length >= num2.length ? [num1, num2] : [num2, num1];

    for (let i = num2.length - 1; i >= 0; i--) {
        if (num2[i] == "0") continue;
        let count = 0;
        let sum = "";
        for (let j = num1.length - 1; j >= 0; j--) {
            let pro = +num1[j] * +num2[i] + count;
            count = Math.floor(pro / 10);
            sum = (pro % 10).toString() + sum;
        }
        if (count != 0)
            sum = count.toString() + sum;
        sum = sum + "0".repeat(num2.length - 1 - i);
        arr1.push(sum);
    }

    if (arr1.length == 0) return "0";
    if (arr1.length == 1) return arr1[0];

    let res = arr1[0];
    for (let i = 1; i < arr1.length; i++) {
        [res, arr1[i]] = res.length > arr1[i].length ? [res, arr1[i]] : [arr1[i], res];
        arr1[i] = arr1[i].padStart(res.length, '0');
        let count = 0;
        let str = ""
        for (let j = res.length - 1; j >= 0; j--) {
            let sum = +res[j] + +arr1[i][j] + count;
            count = Math.floor(sum / 10);
            str = (sum % 10).toString() + str;
        }
        if (count != 0)
            str = count.toString() + str;
        res = str;
    }
    return res;
};

console.log(multiply("45678", "123"));