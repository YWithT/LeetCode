/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function (S, N) {
    for (let i = 1; i <= N; i++) {
        let str = i.toString(2);
        if (S.indexOf(str) == -1)
            return false;
    }
    return true;
};