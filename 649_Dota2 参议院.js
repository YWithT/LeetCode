/**
 * @param {string} senate
 * @return {string}
 */

//自构算法， 使用一个del数组存储删除记录
var predictPartyVictory = function (senate) {
    var del = new Array(senate.length).fill(0);
    while (1) {
        let flag = "";
        for (let i = 0; i < senate.length; i++) {
            if (senate[i] == "R" && del[i] == 0) {
                if (delSenate(senate, del, i, "D")) {
                    flag = "Radiant";
                }
            } else if (senate[i] == "D" && del[i] == 0) {
                if (delSenate(senate, del, i, "R")) {
                    flag = "Dire";
                }
            } else {
                continue;
            }
        }
        if (flag != "") {
            return flag;
        }
    }
};

function delSenate(senate, del, index, team) {
    for (let i = index + 1; i < senate.length; i++) {
        if (senate[i] == team && del[i] == 0) {
            del[i] = 1;
            return 0;
        }
    }
    for (let i = 0; i < index; i++) {
        if (senate[i] == team && del[i] == 0) {
            del[i] = 1;
            return 0;
        }
    }
    return 1;
}

//借鉴算法，使用一个变量count来比较R和D的数量
var predictPartyVictory = function (senate) {
    var count = 0;
    while (senate.length) {
        let newSenate = "";
        for (let i = 0; i < senate.length; i++) {
            if (senate[i] == "R") {
                if (count >= 0) {
                    newSenate += "R";
                }
                count++;
            }
            if (senate[i] == "D") {
                if (count <= 0) {
                    newSenate += "D";
                }
                count--;
            }
        }
        senate = newSenate;
        if (senate.indexOf("D") == -1) {
            return "Radiant";
        }
        if (senate.indexOf("R") == -1) {
            return "Dire";
        }
    }
}
console.log(predictPartyVictory("RDD"));