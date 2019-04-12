/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var res = [];
    var brace = ['(', ')', '[', ']', '{', '}'];
    for (let i = 0; i < s.length; i++) {
        if (brace.indexOf(s[i]) % 2 == 0) {
            res.push(s[i]);
        }
        else {
            let leftBrace = res.pop();
            if (brace.indexOf(leftBrace) + 1 != brace.indexOf(s[i])) {
                return false;
            }
        }
    }
    if (res.length == 0)
        return true;
    else
        return false;
};

console.log(isValid("}"))