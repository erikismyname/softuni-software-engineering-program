function solve([radians]) {

    return Math.trunc((Number(radians) * 180) / Math.PI);

}

console.log(solve(['3.1416'])); // 180

console.log(solve(['6.2832'])); // 360

console.log(solve(['0.7854'])); // 45