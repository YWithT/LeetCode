var x = 1;

function foo(x, y = function () {
    x = 2;
}) {
    x = 3;
    y();
    console.log(x);
}

foo() // 3
x // 1