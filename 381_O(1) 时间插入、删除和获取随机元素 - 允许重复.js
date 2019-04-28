/**
 * Initialize your data structure here.
 */

//自写算法， 在obj中使用数组来记录不同的下标， 但是难以在remove时实现O(1) 时间复杂度
var RandomizedCollection = function () {
    this.arr = [];
    this.obj = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    let flag = 0;
    if (this.obj[val] == undefined) {
        flag = 1;
        this.arr.push(val);
        this.obj[val] = [this.arr.length - 1];
    }
    else {
        this.arr.push(val);
        this.obj[val].push(this.arr.length - 1);
    }
    return Boolean(flag);
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    if (this.obj[val] == undefined)
        return false;
    //建立一个指针指向val元素对应的哈希表数组
    let curValObjArr = this.obj[val];
    //建立一个指针指向arr末尾元素对应的哈希表数组
    let lastValObjArr = this.obj[this.arr[this.arr.length - 1]];
    //若删除的就是最后一个元素
    if (curValObjArr == lastValObjArr) {
        curValObjArr.pop();
        this.arr.pop();
        if (curValObjArr.length == 0)
            delete this.obj[val];
        return true;
    }
    //若删除的并非最后一个元素
    else {
        //找到待删除元素中最新插入的值的下标
        let index = curValObjArr.pop();
        //若删除后对应数组长度为0，表明集合中已无该元素，删除对应的哈希表数据
        if (curValObjArr.length == 0)
            delete this.obj[val];
        //交换位置前先修改对应的哈希表数据
        lastValObjArr[lastValObjArr.length - 1] = index;

        //此处排序不是O(1)！
        lastValObjArr.sort((a, b) => a - b);

        //将this.arr中的两数交换位置，实现O(1)删除
        let lastIndex = this.arr.length - 1;
        [this.arr[index], this.arr[lastIndex]] = [this.arr[lastIndex], this.arr[index]];
        //移除对应元素
        this.arr.pop();
        return true;
    }
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    let randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
};