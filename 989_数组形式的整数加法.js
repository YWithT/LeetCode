/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
//解法一  同时循环两个数组
// var addToArrayForm = function(A, K) {
//     var K = [...K.toString()].map(Number);          //Number转Array
//     var res = [];
//     var flag = 0;
//     var count = 0;
//     for(let i=A.length-1,j=K.length-1; i>-1 || j>-1; i--,j--){          //js的for循环中，判断条件若为多个不可用逗号分隔，应写为完整的语句(若写逗号，则最后的判断条件为真正的条件)
//         count = 0;
//         if(i>-1) count += A[i];
//         if(j>-1) count += K[j];
//         count += flag ;
//         if(count>=10){
//             res.unshift(count-10);              //unshift：在数组的头部插入，并返回修改后的数组长度    shift:取出数组头部
//             flag = 1;
//         }else{
//             res.unshift(count);
//             flag = 0;
//         }
//     }
//     if(flag != 0){     //当循环数组之后检查时候仍有进位，有则在数组头部+1
//         res.unshift(1);
//     }
//     return res;
// };

//解法二  使用bigInt转为大数运算
var addToArrayForm = function(A, K) {
    return (BigInt(A.join('')) + BigInt(K.toString()))
    .toString()
    .split('')
    .map(Number);
};

var x = '3';
console.log(typeof x, typeof +x);