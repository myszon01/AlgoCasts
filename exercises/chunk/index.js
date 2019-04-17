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
    const arrCount = Math.ceil(array.length/size)
    let chunk =[]
    let arrStart = 0
    let arrEnd = size
    for(let count = 1; count<=arrCount; count ++){
        chunk.push(array.slice(arrStart, arrEnd))
        arrStart = arrEnd
        arrEnd+=size
    }
    return chunk
}

module.exports = chunk;

// function chunk(array, size) {
//     const arrCount = Math.ceil(array.length/size)
//     let chunk =[]
//     let arrPointer = 0
//     for(let count = 1; count<=arrCount; count ++){
//         let tempArr = []
//         for(let s = 0; s<size && arrPointer<array.length; s ++){
//             tempArr.push(array[arrPointer])
//             arrPointer++
//         }
//         chunk.push(tempArr)
//     }
//     return chunk
// }
