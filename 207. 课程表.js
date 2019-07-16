/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// //自写算法，耗时
// var canFinish = function (numCourses, prerequisites) {
//     if (prerequisites.length == 0) return true;

//     let learned = [];
//     //添加无先修课程的课程进数组
//     for (let i = 0; i < prerequisites.length; i++) {
//         let pre = prerequisites[i][1];
//         //已经存在则跳过
//         if (learned.includes(pre)) continue;
//         let flag = 1;
//         for (let j = 0; j < prerequisites.length; j++) {
//             if (prerequisites[j][0] == pre) {
//                 flag = 0;
//                 break;
//             }
//         }
//         if (flag) {
//             learned.push(prerequisites[i][1]);
//         }
//     }
//     if (learned.length == 0) return false;

//     let map = new Map();
//     for (let i = 0; i < prerequisites.length; i++) {
//         let val = map.get(prerequisites[i][0])
//         if (val) {
//             val.push(prerequisites[i][1]);
//         }
//         else {
//             map.set(prerequisites[i][0], [prerequisites[i][1]]);
//         }
//     }

//     while (1) {
//         let oldSize = map.size;
//         for (let key of map.keys()) {
//             let flag = 1;
//             let pres = map.get(key);
//             for (let pre of pres) {
//                 if (!learned.includes(pre)) {
//                     flag = 0;
//                     break;
//                 }
//             }
//             if (flag) {
//                 learned.push(key);
//                 map.delete(key);
//                 i = -1;
//             }
//         }
//         if (map.size == 0) return true;
//         if (oldSize == map.size) return false;
//     }
// };

//借鉴算法
var canFinish = function (numCourses, prerequisites) {
    //创建图
    let graph = new Array(numCourses).fill(0).map(x => []);
    //创建入度数组
    let inArr = new Array(numCourses).fill(0);

    //遍历，填充图和入度数组
    for (let pre of prerequisites) {
        graph[pre[1]].push(pre[0]);
        inArr[pre[0]]++;
    }

    //创建数组（队列），表示已经学会的课程
    let learned = new Array();
    for (let i = 0; i < numCourses; i++) {
        if (inArr[i] == 0) learned.push(i);
    }

    //当learned数组不为0时保持循环
    while (learned.length) {
        //首元素出队列
        let course = learned.shift();
        //遍历需求该元素的课程
        for (let lastCourse of graph[course]) {
            //对应课程入度-1；
            inArr[lastCourse]--;
            //若对应课程入度已为0则添加进learned队列
            if (inArr[lastCourse] == 0) learned.push(lastCourse);
        }
    }

    //统计入度数组，若依然有元素的入度不为0说明存在循环
    for (let i = 0; i < numCourses; i++) {
        if (inArr[i] != 0) return false;
    }
    return true;
}


num = 3;
arr = [
    [1, 0],
    [1, 2],
    [0, 1],
];
console.log(canFinish(num, arr));