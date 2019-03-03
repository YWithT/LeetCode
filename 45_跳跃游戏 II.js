/**
 * @param {number[]} nums
 * @return {number}
 */
//自写解法
//走到下标i时，对这个下标后面nums[i]个值进行分析，取其中可以跳的最远的值
// var jump = function (nums) {
//     var count = 0;  //跳跃次数

//     if (nums.length < 3)
//         return nums.length - 1;

//     for (let i = 0; i < nums.length -1;) {
//         let max = 0;
//         let maxIndex = 0;

//         //k为增加的步长，因为若3后面为3,2,1.由于步长的原因，这三个数能跳到的最远距离其实是一样的
//         for (let j = i + 1, k = 0; j <= i + nums[i]; j++, k++) {    
//             if (nums[j] + k > max) {    
//                 max = nums[j] + k;      //记录最大值
//                 maxIndex = j;           //记录最大值对应的下标
//             }
//             if(j == nums.length - 1){   //边界值判断
//                 maxIndex = j;
//                 break;
//             }
//         }
//         i = maxIndex;
//         count++;
//     }
//     return count;
// };

//借鉴写法，不再记录哪个点可以到达最远距离，改为记录可以达到的最远距离
var jump = function (nums) {
    var res = 0;
    var i = 0;
    var cur = 0;
    while (cur < nums.length - 1) {
        res++;      
        var pre = cur;  //记录当前所能达到的最远距离
        while(i<=pre){      //在当前最远距离内循环，取能达到的最远距离
            cur = Math.max(cur,i+nums[i]);     //取当前最远距离和当前下标所能达到的最远距离中的较大值
            i++;
        }
        if(pre == cur) return -1;
    }
    return res;
}


console.log(jump([3, 1, 3, 1]));