/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = [];
    let cur = [];
    helper(s, cur, res);
    return res;
};

function helper(s, cur, res) {
    if (cur.length == 3) {
        if (checkValid(s)) {
            res.push(cur[0] + '.' + cur[1] + '.' + cur[2] + '.' + s);
        }
        return;
    }
    else {
        for (let i = 1; i <= 3; i++) {
            if (checkValid(s.slice(0, i))) {
                cur.push(s.slice(0, i));
                helper(s.slice(i), cur, res);
                cur.pop();
            }
        }
    }
}

function checkValid(str) {
    if (str.length > 3 || str.length == 0 || (str[0] == 0 && str.length > 1)) return false;
    return str <= 255 && str >= 0;
}

console.log(restoreIpAddresses('25522'))