/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) return true;
    let res = [];
    let stack = [root];
    while (stack.length != 0) {
        let length = stack.length;
        for (let i = 0; i < length; i++) {
            let node = stack.shift();
            if (node.left) {
                stack.push(node.left);
                res.push(node.left.val);
            }
            else {
                res.push(null);
            }
            if (node.right) {
                stack.push(node.right);
                res.push(node.right.val);
            }
            else {
                res.push(null);
            }
        }
        if (check(res) === false) return false;
        res = [];
    }
    return true;
};

function check(arr) {
    if (arr.length % 2 !== 0) return false;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//数组转二叉树
function arrayToBinaryTree(array) {
    if (array.length == 0) {
        return new TreeNode(null);
    }
    let root = new TreeNode(array[0]);
    let stack = [root];
    let index = -1;
    while (stack.length != 0) {
        index++;
        let node = stack.shift();
        if (node == null) continue;
        if (array[2 * index + 1] != null && array[2 * index + 1] != undefined) {
            node.left = new TreeNode(array[2 * index + 1]);
            stack.push(node.left);
        }
        else {
            node.left = null;
            stack.push(null);
        }
        if (array[2 * index + 2] != null && array[2 * index + 2] != undefined) {
            node.right = new TreeNode(array[2 * index + 2]);
            stack.push(node.right);
        }
        else {
            node.right = null;
            stack.push(null);
        }
    }
    return root;
}

console.log(isSymmetric(arrayToBinaryTree([1, 2, 2, null, 3, null, 3])))