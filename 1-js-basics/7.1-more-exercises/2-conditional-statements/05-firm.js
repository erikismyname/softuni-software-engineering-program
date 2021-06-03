function solve([neededH, days, workers]) {

    neededH = Number(neededH);

    days = Number(days);

    workers = Number(workers);

    let actualTime = Math.floor((days * 0.90) * 8 + (workers * (days * 2)));

    return actualTime < neededH ? `Not enough time!${neededH - actualTime} hours needed.` : `Yes!${actualTime - neededH} hours left.`;

}

console.log(solve(['90', '7', '3']));
console.log(solve(['99', '3', '1']));
console.log(solve(['50', '5', '2']));