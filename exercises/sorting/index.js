// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j
            }
        }
        if (i !== indexOfMin) {
            let smaller = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = smaller
        }

    }
    return arr

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
