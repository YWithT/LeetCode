/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var arr = [
        [],
        [],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"]
    ]

    if (digits == "")
        return [];

    var res = arr[digits[0]].concat();

    for (let i = 1; i < digits.length; i++) {
        let cur_res = []
        for (let j = 0; j < res.length; j++) {
            for (let k = 0; k < arr[digits[i]].length; k++) {
                cur_res.push(res[j] + arr[digits[i]][k]);
            }
        }
        res = cur_res;
    }

    return res;
};

console.log(letterCombinations("232"))