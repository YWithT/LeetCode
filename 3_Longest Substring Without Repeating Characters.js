/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var res = "";
    var maxLength = 0;
    for (var i = 0; i < s.length; i++) {
        var index = res.indexOf(s[i]);
        if (index === -1) {
            res += s[i];
            if(res.length > maxLength){
                maxLength = res.length;
            }
        }else{
            res = res.slice(index+1) + s[i];
        }
    }
    return maxLength;
};
