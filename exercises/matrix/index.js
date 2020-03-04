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




    let count = 1;
    let arr = [];
    for(let f=0 ; f < n ; f ++){
        arr[f] = []
        /*for(let r=0 ; r < n ; r ++){
            arr[f][r] = 'x'
        }*/

    }

    let startCol = 0
    let endCol = n

    let startRow = 0
    let endRow = n

    while (count <= n*n){

        for(var i=startCol ; i < endCol-1 ; i ++){
            arr[startRow][i] = count++
        }

        for(var j=startRow ; j < endRow ; j ++){
            arr[j][i] = count++
        }

        for(var k=j-2 ; k >= startCol ; k --){ // ok
            arr[j-1][k] = count++
        }

        for(var x=j-2 ; x > startRow ; x --){
            arr[x][startCol] = count++
        }

        startCol++
        endCol--
        startRow++
        endRow--
    }
//console.log(arr)
    return arr
}

module.exports = matrix;
