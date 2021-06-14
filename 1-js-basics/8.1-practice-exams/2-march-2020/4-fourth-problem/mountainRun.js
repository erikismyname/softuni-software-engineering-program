function solve(arr) {

    let [record, meters, timeForOneM] = arr.filter(el => el != '').map(Number);

    let total = (meters * timeForOneM) + (Math.floor(meters / 50) * 30);

    return total < record ? `Yes! The new record is ${total.toFixed(2)} seconds.` : `No! He was ${(total - record).toFixed(2)} seconds slower.`;

}

console.log(solve(['10164', '1400', '25', '']));

console.log(solve(['5554.36', '1340', '3.23', '']));

console.log(solve(['1377', '389', '3']));