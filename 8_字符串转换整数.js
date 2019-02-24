/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    if (str[0] != '+' || str[0] != '-' || str[0] < '0' || str[0] > '9')
        return 0;
    
};