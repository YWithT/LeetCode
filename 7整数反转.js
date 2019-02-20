var reverse = function(x) {
    x=x.toString()
    var str=x.split("").reverse().join("")
    str = parseInt(str)   //转INT时会返回已经转化为整数的部分，若为负数的话，末尾的负号会省略
    if(str>2**31-1) return 0
    return x < 0 ? -str:str;
};
console.log(123)