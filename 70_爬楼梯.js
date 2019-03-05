/**
 * @param {number} n
 * @return {number}
 */

//递归写法
var climbStairs = function (n) {
    var res = caculator(n);
    return res;
};

function caculator(n) {
    if (n < 3) {
        return n;
    }
    for (let i = 3; i <= n; i++) {
        return caculator(n - 1) + caculator(n - 2)
    }
}



//初步动态规划写法
var climbStairs = function (n) {
    var a = [0, 1, 2]
    var res = caculator(a, n);
    return res;
};

function caculator(a, n) {
    if (a[n] != undefined) {
        return a[n];
    }
    if (n < 3) {
        a[n] = n;
        return a[n];
    }
    for (let i = 3; i <= n; i++) {
        a[n] = caculator(a, n - 1) + caculator(a, n - 2)
        return a[n];
    }
}


//内存优化
var climbStairs = function (n) {
    var res = caculator(n);
    return res;
};

function caculator(n) {
    let a = 1;
    let b = 2;
    if (n < 3) {
        return n;
    }
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

//语法优化
var climbStairs = function (n) {
    let a = b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
};



//var a = [1,2,3];
//console.log(typeof a[4])
console.log(climbStairs(4))