/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        let str = data[i].toString(2).padStart(8, "0");
        if (count > 3)
            return false;
        if (count == 0) {
            if (str[0] == 0)
                continue;
            else if (str[0] == 1 && str[1] == 0) {
                return false;
            }
            else {
                for (let j = 1; j < str.length; j++) {
                    if (str[j] == 1)
                        count++;
                    else
                        break;
                }
            }
        }
        else {
            if (str[0] == 1 && str[1] == 0)
                count--;
            else
                return false;
        }
    }
    return count == 0 ? true : false;
};


//借鉴算法，通过位运算大幅提高计算效率
var validUtf8 = function (data) {
    let count = 0;
    for (let num of data) {
        if (count == 0) {
            if (num >> 5 == 0b110) count = 1;
            else if (num >> 4 == 0b1110) count = 2;
            else if (num >> 3 == 0b11110) count = 3;
            else if (num >> 7 == 0b1) return false;
        }
        else {
            if (num >> 6 != 0b10) return false;
            count--;
        }
    }
    return count == 0 ? true : false;
};


console.log(validUtf8([235, 140, 4]));