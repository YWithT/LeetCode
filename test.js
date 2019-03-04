function setName(obj) {
    obj.name = "yccc";
    obj = new Object(); //改变obj的指向，此时obj指向一个新的内存地址，不再和person指向同一个
    obj.name = "Greg";
}

var person = {
    name: 'yc',
}
setName(person);
person = new Object();


console.log(person.name)