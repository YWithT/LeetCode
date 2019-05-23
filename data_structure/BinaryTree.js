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