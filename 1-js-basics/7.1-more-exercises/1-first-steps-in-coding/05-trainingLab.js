function solve([lengthM, widthM]) {

    lengthM = Number(lengthM);

    widthM = Number(widthM);

    let lengthCm = lengthM * 100;

    let widthCm = widthM * 100;

    let rowDesks = Math.trunc((widthCm - 100) / 70);

    let numOfRows = Math.trunc(lengthCm / 120);

    let totalDesks = (rowDesks * numOfRows) - 3;

    return totalDesks;

}

console.log(solve(['8.4', '5.2']));