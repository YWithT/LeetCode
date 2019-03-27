/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    str = "";
    while (num) {
        if (num >= 1000) {
            num -= 1000;
            str += "M";
            continue;
        }
        if (num >= 900) {
            num -= 900;
            str += "CM";
            continue;
        }
        if (num >= 500) {
            num -= 500;
            str += "D";
            continue;
        }
        if (num >= 400) {
            num -= 400;
            str += "CD";
            continue;
        }
        if (num >= 100) {
            num -= 100;
            str += "C";
            continue;
        }
        if (num >= 90) {
            num -= 90;
            str += "XC";
            continue;
        }
        if (num >= 50) {
            num -= 50;
            str += "L";
            continue;
        }
        if (num >= 40) {
            num -= 40;
            str += "XL";
            continue;
        }
        if (num >= 10) {
            num -= 10;
            str += "X";
            continue;
        }
        if (num == 9) {
            num -= 9;
            str += "IX";
            continue
        }
        if (num >= 5) {
            num -= 5;
            str += "V";
            continue;
        }
        if (num == 4) {
            num -= 4;
            str += "IV";
            continue;
        }
        if (num >= 1) {
            num -= 1;
            str += "I";
            continue;
        }
    }
    return str;
};

console.log(intToRoman(949));