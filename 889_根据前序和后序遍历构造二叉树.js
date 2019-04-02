/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {

};


//js函数代码
function Ethan(num, projCmptDec, restDec, errorScore) {
    //定义项目数量
    let count = 0;
    //设定循环
    while (1) {
        //获取errorScore中的最大值
        let errorMax = Math.max(errorScore);
        //如果最大值已经小于等于0，则跳出循环
        if (errorMax <= 0) {
            break;
        }
        //获取最大值在数组中的下标
        let maxIndex = errorMax.indexOf(errorMax);
        //将数组中所有数减去restDec
        for (let i = 0; i < errorScore.length; i++) {
            errorScore[i] -= restDec;
        }
        //将最大数再减去(projCmptDec-restDec)
        errorScore[maxIndex] -= projCmptDec - restDec;
        //项目数量加1
        count++;
    }
    return count;
}