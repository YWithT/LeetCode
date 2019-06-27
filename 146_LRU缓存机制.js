/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let val = this.map.get(key)
    if (typeof val === 'undefined') {
        return -1
    }
    this.map.delete(key)
    this.map.set(key, val)
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.map.delete(key)
    }
    this.map.set(key, value)
    let keys = this.map.keys()
    while (this.map.size > this.capacity) {
        this.map.delete(keys.next().value)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let test = new LRUCache(2);
test.get(2);
test.put(2, 6);
test.get(1);
test.put(1, 5);
test.put(1, 2);
test.get(1);
test.get(2);
console.log(test.get(2));