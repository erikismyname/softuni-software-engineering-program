function getSubSum(arr, startIdx, endIdx) {

    if (!Array.isArray(arr)) {

        return NaN;

    }

    if (startIdx < 0) {

        startIdx = 0;

    }

    if (endIdx >= arr.length) {

        endIdx = arr.length - 1;

    }

    return arr
        .map(Number)
        .slice(startIdx, endIdx + 1)
        .reduce((acc, c) => acc + c, 0);

}