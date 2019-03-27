/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == "") return 0;
    var res = haystack.indexOf(needle);
    return res;
};