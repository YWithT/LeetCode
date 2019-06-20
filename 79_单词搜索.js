/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if ((board.length == 0 || board[0].length == 0) && word.length == 0) return true;
    if ((board.length == 0 || board[0].length == 0) && word.length != 0) return false;

    let visited = new Array(board.length).fill(0).map(x => new Array(board[0].length).fill(0));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == word[0]) {
                visited[i][j] = 1;
                if (helper(board, word, 1, [i, j], visited)) return true;
                visited[i][j] = 0;
            }
        }
    }
    return false;
};

function helper(board, word, pos, lastCoor, visited) {
    if (pos >= word.length) return true;
    let arrs = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0]
    ];
    for (let arr of arrs) {
        if (lastCoor[0] + arr[0] < 0 || lastCoor[0] + arr[0] >= board.length) continue;
        if (lastCoor[1] + arr[1] < 0 || lastCoor[1] + arr[1] >= board[0].length) continue;
        let xCoor = lastCoor[0] + arr[0];
        let yCoor = lastCoor[1] + arr[1];
        if (word[pos] == board[xCoor][yCoor] && visited[xCoor][yCoor] == 0) {
            visited[xCoor][yCoor] = 1;
            if (helper(board, word, pos + 1, [xCoor, yCoor], visited)) return true;
            visited[xCoor][yCoor] = 0;
        }
    }
    return false;
}

board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
word = "ABCD";
console.log(exist(board, word));