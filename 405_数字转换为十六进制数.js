/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let res = "";
    let count = 0;
    //因为num最高为32位，所以一次右移4位，最多右移7次
    //由于负数在计算机中本身用补码保存，故可以统一处理
    while (num != 0 && count++ < 8) {
        //将最右4位与1111按位与，得到最右四位的值，套入数组取值
        res = arr[(num & 0xf)] + res;
        //num=num>>4，将num右移4位
        num >>= 4;
    }
    return res.length == 0 ? "0" : res;
};

console.log(toHex(-17));