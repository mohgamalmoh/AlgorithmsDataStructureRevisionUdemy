// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    let final = []

    for(let i = 0 ; i < array.length ; i += size){
        final.push(array.slice(i,i+size))
    }


  /*  for(let i = 1 ; i <= array.length ; i ++){
        chunk.push(array[i-1])
        if(i % size == 0 || (i == array.length && chunk.length > 0)){
            final.push(chunk)
            chunk = []
        }
    }*/

    /*for(let i = 1 ; i <= array.length ; i ++){
        if(i % size == 0 && i <= array.length){
            chunk.push(array[i-1])
            final.push(chunk)
            chunk = []

        }else{
            chunk.push(array[i-1])
            if(i == array.length){
                final.push(chunk)

            }
        }
    }*/
     //console.log(final)
    return final
}

module.exports = chunk;
