/**
 * @param {number[]} height
 * @return {number}
 */
//自写解法：先找到数组中最长的柱子，再向两边延伸计算
var trap = function (height) {
    if (height.length < 3)
        return 0;

    var maxIndex = getMaxIndex(height);
    var res = 0;
    res = handle(height.slice(0, maxIndex),res);    //将最长柱子的左半边进行运算
    res = handle(height.slice(maxIndex + 1, height.length).reverse(),res);      //将最长柱子的右半边逆序并运算

    return res;
};

function handle(array , res){
    var end = array.length ;
    while(end != 0){
        var max = getMaxIndex(array.slice(0,end));
        for(let i = max + 1;i<end;i++){
            res += array[max] - array[i];
        }
        end = max;
    }
    return res;
}

function getMaxIndex(array) {
    var max = -Math.pow(2, -32);
    var res = -1;
    for (index in array) {
        if (array[index] > max) {
            max = array[index];
            res = index;
        }
    }
    return +res;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

//借鉴算法：只需遍历一次
//算法思想：从两边往中间遍历，若左边值较大则从右往左，若右边值较大则从左往右，往复交替
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0, left = 0, right = height.length - 1, leftMax = 0, rightMax = 0
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left]
            else res += leftMax - height[left]
            left++
        } else {
            if (height[right] >= rightMax) rightMax = height[right]
            else res += rightMax - height[right]
            right--
        }
    }
    return res
};
