/**
 * @param {number} N
 * @return {number}
 */
//根据46_全排列.js修改算法， 再每一个全排列中添加判断条件
var countArrangement = function (N) {
    var nums = [];
    for (let i = 1; i <= N; i++) {
        nums.push(i);
    }
    var midArray = [];
    res = [0];
    permuteArray(midArray, res, nums);
    return res[0];
};

function permuteArray(midArray, res, array) {
    if (array.length == 0) {
        res[0] += 1;
    } else {
        let arr = midArray.concat();
        for (let i = 0; i < array.length; i++) {
            midArray = arr.concat();
            if (array[i] % (midArray.length + 1) == 0 || (midArray.length + 1) % array[i] == 0) {
                midArray.push(array[i]);
                let nextArray = array.concat();
                nextArray.splice(i, 1);
                permuteArray(midArray, res, nextArray);
            }
        }
    }
}

//借鉴算法，使用visited数组作为标记，省去大量的数组增删操作
function countArrangement(N) {
    var res = [0];
    var visited = new Array(N + 1).fill(0);
    helper(N, visited, 1, res);
    return res[0];
}

function helper(N, visited, pos, res) {
    if (pos > N) {
        res[0]++;
        return;
    }
    for (let i = 1; i <= N; ++i) {
        if (visited[i] == 0 && (i % pos == 0 || pos % i == 0)) {
            visited[i] = 1;
            helper(N, visited, pos + 1, res);
            visited[i] = 0;
        }
    }
}

console.log(countArrangement(15))