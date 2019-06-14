function replaceSpace(str) {
    return str.replace(/\W/g, "%20");
}

console.log(replaceSpace("fe fe fe "))