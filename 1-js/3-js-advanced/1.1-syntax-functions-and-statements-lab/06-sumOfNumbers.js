function solve(...nums) {

    const [startNum, endNum] = nums.map(Number);

    let sum = 0;

    for (let a = startNum; a <= endNum; a++) {

        sum += a;

    }

    return sum;

}