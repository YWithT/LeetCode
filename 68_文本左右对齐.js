/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let res = [];
    let curLength = 0;
    let curArr = [];
    for (let i = 0; i < words.length; i++) {
        //当curArr长度为0时，直接添加
        if (curArr.length == 0) {
            curArr.push(words[i]);
            curLength = words[i].length;
        }
        //当加入下一个单词的长度和一个空格后的总长度小于maxWidth时，添加下一个单词
        else if (curLength + words[i].length + 1 <= maxWidth) {
            curArr.push(words[i]);
            curLength += words[i].length + 1;
        }
        else {
            generateStr(curArr, maxWidth, curLength, res);
            curArr = [];
            curLength = 0;
            i--;
        }
    }
    //将最后一组数据添加进res
    if (curArr.length != 0) {
        let str = "";
        for (let i = 0; i < curArr.length; i++) {
            str += curArr[i] + " ";
        }
        //避免最后一个单词后面的空格会造成超出maxWidth的情况
        str = str.trim();
        //空格填充
        str += " ".repeat(Math.max(0, (maxWidth - str.length)));
        res.push(str);
    }
    return res;
};

function generateStr(curArr, maxWidth, curLength, res) {
    //空格总数量
    let blankNum = Math.max(1, curArr.length - 1);
    //空格总长度
    let blankLength = maxWidth - curLength + curArr.length - 1;
    //每个地方的空格最少的数量
    let blankArr = new Array(blankNum).fill(Math.floor(blankLength / blankNum));
    for (let i = 0; i < blankLength % blankNum; i++) {
        blankArr[i]++;
    }
    blankArr.push(0);

    let str = "";
    for (let i = 0; i < curArr.length; i++) {
        str += curArr[i] + " ".repeat(blankArr[i]);
    }
    res.push(str);
}

words = ["ask", "not", "what", "your", "country", "can", "do", "for", "you", "ask", "what", "you", "can", "do", "for", "your", "country"]
maxWidth = 16
console.log(fullJustify(words, maxWidth));