/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    let res = n % 4;
    return res == 0 ? false : true;
};