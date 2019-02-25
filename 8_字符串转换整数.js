/**
 * @param {string} str
 * @return {number}
 */

//算法核心：parseInt函数，从字符串的第一个非空字符开始，一直转换到第一个非数字字符。若第一个非空字符即为非数字字符则返回NaN
//if(NaN) 返回false
var myAtoi = function (str) {
        var res = parseInt(str);
        if (res) {
                if (res < -2147483648) return -2147483648;
                if (res > 2147483647) return 2147483647;
                return res;
        }
        return 0;

};

console.log(myAtoi('w34'));