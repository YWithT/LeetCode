/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0);
    for (let i = 0; i < heights.length; i++) {
        while (stack.length != 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            let index = stack.pop();
            let width = stack.length == 0 ? i : (i - stack[stack.length - 1] - 1)
            let newArea = heights[index] * width;
            maxArea = Math.max(maxArea, newArea);
        }
        stack.push(i);
    }
    return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))