/**
 * Initialize your data structure here.
 */
var Node = function (val) {
    this.val = val;
    this.sons = [];
}

var Trie = function () {
    this.root = new Node();
};


/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    word = word + "$";
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
        if (root.sons.length == 0) {
            let newNode = new Node(word[i]);
            root.sons.push(newNode);
            root = newNode;
        }
        else {
            for (let j = 0; j < root.sons.length; j++) {
                if (root.sons[j].val === word[i]) {
                    root = root.sons[j];
                    break;
                }
                if (j == root.sons.length - 1 && root.sons[j].val != word[i]) {
                    let newNode = new Node(word[i]);
                    root.sons.push(newNode);
                    root = newNode;
                    break;
                }
            }
        }
    }
    return true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    word = word + "$";
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
        if (root.sons.length == 0) return false;
        for (let j = 0; j < root.sons.length; j++) {
            if (root.sons[j].val === word[i]) {
                root = root.sons[j];
                break;
            }
            if (j == root.sons.length - 1 && root.sons[j].val != word[i]) return false;
        }
    }
    return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let root = this.root;
    for (let i = 0; i < prefix.length; i++) {
        if (root.sons.length == 0) return false;
        for (let j = 0; j < root.sons.length; j++) {
            if (root.sons[j].val === prefix[i]) {
                root = root.sons[j];
                break;
            }
            if (j == root.sons.length - 1 && root.sons[j].val != prefix[i]) return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple"))
console.log(trie.search("app"));