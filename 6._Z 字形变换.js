/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let res = new Array(numRows).fill(0).map(x => []);
    let index = 0;
    while (1) {
        for (let i = 0; i < res.length; i++) {
            if (s[index] == undefined) {
                return res.map(x => x.join("")).join("");
            }
            res[i].push(s[index++]);
        }
        for (let i = res.length - 2; i > 0; i--) {
            if (s[index] == undefined) {
                return res.map(x => x.join("")).join("");
            }
            res[i].push(s[index++]);
        }
    }
};

let s = "LEETCODEISHIRING";
let numRows = 3;

console.log(convert(s, numRows));