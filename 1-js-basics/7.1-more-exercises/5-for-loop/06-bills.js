function solve(arr) {

    let months = Number(arr.shift());

    let electricitySum = 0;

    let waterSum = 0;

    let internetSum = 0;

    let otherSum = 0;

    let avgSum = 0;

    for (let a = 0; a < arr.length; a++) {

        let current = Number(arr[a]);

        electricitySum += current;

        waterSum += 20;

        internetSum += 15;

        otherSum += (current + 20 + 15) * 1.20;

    }

    return `Electricity: ${electricitySum.toFixed(2)} lv\nWater: ${waterSum.toFixed(2)} lv\nInternet: ${internetSum.toFixed(2)} lv\nOther: ${otherSum.toFixed(2)} lv\nAverage: ${((electricitySum + waterSum + internetSum + otherSum) / months).toFixed(2)} lv`;

}

console.log(solve([
    '8',      '123.54',
    '231.54', '140.23',
    '100',    '122.4',
    '430',    '178.52',
    '64.2'
  ]));