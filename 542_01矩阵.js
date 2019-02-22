/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    var row = matrix.length;
    var column = matrix[0].length;
    var resMatrix = new Array(row).fill(new Array(column).fill(-1));
    for(let i = 0;;i++){
        for(let [rowIndex,rowArray] of matrix.entries()){
            for(let [columnIndex,val] of rowArray.entries()){
                if(val == i){
                    changeMatrix(resMatrix,i,rowIndex,columnIndex);
                }
            } 
        }
    }
    return resMatrix;
};

function matrixIndexof(matrix,value){
    for(let [index, array] of matrix.entries()){
        if(array.includes(value)) {
            return [index,array.indexOf(value)];
        }
    };
    return [-1,-1];
}

function changeMatrix(matrix,val,rowIndex,columnIndex){
    if(matrix[rowIndex+1][columnIndex] === -1)
        matrix[rowIndex+1][columnIndex] = matrix[rowIndex+1][columnIndex] === 0 ? 0 : val + 1; 
    if(matrix[rowIndex-1][columnIndex] === -1)
        matrix[rowIndex-1][columnIndex] = matrix[rowIndex-1][columnIndex] === 0 ? 0 : val + 1; 
    if(matrix[rowIndex][columnIndex+1] === -1)
        matrix[rowIndex][columnIndex+1] = matrix[rowIndex][columnIndex+1] === 0 ? 0 : val + 1; 
    if(matrix[rowIndex][columnIndex-1] === -1)
        matrix[rowIndex][columnIndex-1] = matrix[rowIndex][columnIndex-1] === 0 ? 0 : val + 1; 
}

let a = [[0,0,0],[0,1,0],[1,1,1]]
console.log(updateMatrix(a));