function solve([companyName, ...arr]) {

    let [adultTickNum, childTickNum, adultPrice, tax] = arr.filter(el => el != '').map(Number);

    let total = ((adultPrice + tax) * adultTickNum) + (((adultPrice * 0.30) + tax) * childTickNum);

    return `The profit of your agency from ${companyName} tickets is ${(total * 0.20).toFixed(2)} lv.`;

}

console.log(solve(['WizzAir', '15', '5', '120', '40', '']));

console.log(solve(['Ryanair', '60', '23', '158.96', '39.12']));