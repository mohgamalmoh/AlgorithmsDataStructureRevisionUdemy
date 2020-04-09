// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0 ; i < arr.length ; i++){
        for (let j = 0 ; j < arr.length-i-1 ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    //console.log(arr)
    return arr
}

function selectionSort(arr) {
    for (let i = 0 ; i < arr.length ; i++){
        let minIdx = i
        for (let j = i ; j < arr.length ; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        if(minIdx != i){
            let temp = arr[minIdx]
            arr[minIdx] = arr[i]
            arr[i] = temp
        }
    }
    //console.log(arr)
    return arr
}

function mergeSort(arr) {
    if(arr.length == 1){
        return arr
    }
    let divider = arr.length/2
    const left = arr.slice(0,divider)
    const right = arr.slice(divider,arr.length)
    let result = merge(mergeSort(left),mergeSort(right))
    return result;

}

function merge(left, right) {
    let result = []
    while(left.length && right.length){

        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }


    result.push(...right)
    result.push(...left)

    return result

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
