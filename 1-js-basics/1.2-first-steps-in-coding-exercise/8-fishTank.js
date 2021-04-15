function solve([lengthCm, widthCm, heightCm, percent]) {

    lengthCm = Number(lengthCm);

    widthCm = Number(widthCm);

    heightCm = Number(heightCm);

    percent = Number(percent);

    let liters = (lengthCm * widthCm * heightCm) / 1000;

    return liters - (liters * (percent / 100));

}