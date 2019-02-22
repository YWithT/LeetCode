function matrixIndexof(matrix,value){
    for(let [index, array] of matrix.entries()){
        if(array.includes(value)) {
            return [index,array.indexOf(value)];
        }
    };
    return [-1,-1];
}

let a = [[1,2,3],[4,5,6],[7,8,9]];
let b = 10;
console.log(a[4][3])