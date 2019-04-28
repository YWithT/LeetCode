/**
 * Initialize your data structure here.
 */

//使用数组来存储数值，使用对象作为哈希表来存储映射关系
//本题本可以单纯使用对象完成，但是在返回随机值时需要通过生成一个数组，并随机产生下标来返回随机值，
//在题中进行大量返回测试时会非常耗时
var RandomizedSet = function () {
    this.dataObj = {};
    this.dataArr = [];
    this.insert = function (val) {
        if (this.dataObj[val] == undefined) {
            this.dataArr.push(val);
            this.dataObj[val] = this.dataArr.length - 1;
            return true;
        }
        return false;
    }
    this.remove = function (val) {
        if (this.dataObj[val] != undefined) {
            //删除时为了达到常数级时间复杂度，需要将欲删除的数移到数组最末端，通过pop()删除
            //交换位置时需修改对应的哈希表值
            let index = this.dataObj[val];
            if (index != this.dataArr.length) {
                this.dataObj[this.dataArr[this.dataArr.length - 1]] = index;
                [this.dataArr[index], this.dataArr[this.dataArr.length - 1]] = [this.dataArr[this.dataArr.length - 1], this.dataArr[index]];
            }
            delete this.dataObj[val];
            this.dataArr.pop();
            return true;
        }
        return false;
    }
    this.getRandom = function () {
        return this.dataArr[parseInt(Math.random() * this.dataArr.length)];
    }
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.dataObj[val] == undefined) {
        this.dataArr.push(val);
        this.dataObj[val] = this.dataArr.length - 1;
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.dataObj[val] != undefined) {
        let index = this.dataObj[val];
        if (index != this.dataArr.length) {
            this.dataObj[this.dataArr[this.dataArr.length - 1]] = index;
            [this.dataArr[index], this.dataArr[this.dataArr.length - 1]] = [this.dataArr[this.dataArr.length - 1], this.dataArr[index]];
        }
        delete this.dataObj[val];
        this.dataArr.pop();
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.dataArr[parseInt(Math.random() * this.dataArr.length)];
};