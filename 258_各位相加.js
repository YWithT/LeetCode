/**
 * @param {number} num
 * @return {number}
 */
//解法一：循环求解
var addDigits = function (num) {
    let str = num.toString();
    while (str.length != 1) {
        let new_num = 0;
        for (let i = 0; i < str.length; i++) {
            new_num += +str[i];
        }
        str = new_num.toString();
    }
    return parseInt(str);
};

//解法二：规律求解
var addDigits = function (num) {
    return num == 0 ? 0 : (num - 1) % 9 + 1;
};

console.log(addDigits(38));