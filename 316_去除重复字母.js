/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let res = [];
    let use = [];
    check(s, res, use);
    res.sort();
    return res[0];
};

function check(str, res, use) {
    if (use.indexOf(str) != -1)
        return;
    use.push(str);
    let flag = 1;
    for (let i = 0; i < str.length; i++) {
        //若str[i]不唯一
        let indexs = checkOnly(str, i);
        if (indexs.length != 1) {
            flag = 0;
            let newStr = str.replace(new RegExp(str[i], "g"), "");
            for (let j = 0; j < indexs.length; j++) {
                let nextStr = newStr.slice(0, indexs[j] - j) + str[i] + newStr.slice(indexs[j] - j);
                console.log(nextStr);
                check(nextStr, res, use);
            }
            break;
        }
    }
    if (flag && res.indexOf(str) == -1)
        res.push(str);


}

function checkOnly(str, index) {
    let indexs = [index];
    for (let i = index + 1; i < str.length; i++) {
        if (str[i] == str[index])
            indexs.push(i);
    }
    return indexs;
}

console.log(removeDuplicateLetters("abcrdeafredgajfrdejiradsfrhdauredaardsafr"));