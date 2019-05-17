/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    if (num == "") return 0;
    let stack = [];
    for (let i = 0; i < num.length; i++) {
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    //找到stack中第一个非0值的位置
    //注意此处由于数值过大，不可通过转换为int型去掉前导0，但是可以转换为BigInt类型，不过运算速度较慢
    let offset = 0;
    while (offset < stack.length && stack[offset] == '0') {
        offset++;
    }
    if (offset == stack.length) return "0";
    return stack.slice(offset).join("");
    // let res = BigInt(stack.join("")).toString();
    // return res;
};

console.log(removeKdigits("1432219", 3))