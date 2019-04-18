// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const res = [...Array(n)].map(e => Array(n));
    let counter = 1;
    let start_row = 0
    let end_row = n-1
    let start_col = 0
    let end_col = n-1
    while(start_col <= end_col && start_row <= end_row){
        for(let col =start_col; col<=end_col; col++){
            res[start_row][col] = counter
            counter++
        }
        start_row++
        for(let row = start_row; row<=end_row; row++){
            res[row][end_col] = counter
            counter++
        }
        end_col--
        for(let col = end_col; col>=start_col; col--){
            res[end_row][col] = counter
            counter++
        }
        end_row--
        for(let row = end_row; row>=start_row; row--){
            res[row][start_col] = counter
            counter++
        }
        
        start_col++

    }
    return res
}

module.exports = matrix;
