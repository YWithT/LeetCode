/**
 *
 *  题目描述
 *  找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重
 *  复的数字。
 * 
 *  说明：
 *  所有数字都是正整数。
 *  解集不能包含重复的组合。 
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function (k, n) {
    let res = [];
    helper([], 1, k, n, res);
    return res;
};

helper = function (cur, startVal, k, n, res) {
    if (n == 0 && cur.length == k) {
        res.push(cur.concat());
        return;
    }
    //从传进来的起始值开始遍历，既能提高运算效率，也能避免重复结果
    for (let i = startVal; i <= 9; i++) {
        if (n - i < 0) break;
        cur.push(i);
        helper(cur, i + 1, k, n - i, res);
        cur.pop();
    }
}



console.log(combinationSum3(3, 9))