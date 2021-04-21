function solve([lengthCm, widthCm, heightCm, percent]) {

    lengthCm = Number(lengthCm);
    widthCm = Number(widthCm);
    heightCm = Number(heightCm);
    percent = Number(percent);

    let liters = (lengthCm * widthCm * heightCm) / 1000;

    return liters - (liters * (percent / 100));

}

console.log(solve(['85', '75', '47', '17']));
// 248.68875

console.log(solve(['105', '77', '89', '18.5']));
// 586.445475