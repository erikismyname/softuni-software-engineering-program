function sortArray(arr, type) {

    return arr.sort(type == 'asc' ? (a, b) => a - b : (a, b) => b - a);

}