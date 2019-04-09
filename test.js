var a = [1, 2, 11, 3]
console.log(
    a.sort(
        function order(a, b) {
            return a - b
        }
    )
);