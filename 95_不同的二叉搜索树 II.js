/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n == 0) return [];
    let memo = new Array(n + 1).fill(0).map(x => new Array(n + 1).fill(0));
    let res = helper(1, n, memo);
    return res;
};

function helper(start, end, memo) {
    if (start > end) return [null];
    if (memo[start][end] != 0) return memo[start][end];
    let res = [];
    for (let i = start; i <= end; i++) {
        let left = helper(start, i - 1, memo);
        let right = helper(i + 1, end, memo);
        for (let a of left) {
            for (let b of right) {
                let node = new TreeNode(i);
                node.left = a;
                node.right = b;
                res.push(node);
            }
        }
    }
    return memo[start][end] = res;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(generateTrees(3))