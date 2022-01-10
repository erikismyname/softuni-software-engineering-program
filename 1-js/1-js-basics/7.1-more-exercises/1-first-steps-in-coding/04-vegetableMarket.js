function solve([priceKgVeg, priceKgFr, kgVeg, kgFr]) {

    priceKgVeg = Number(priceKgVeg);

    priceKgFr = Number(priceKgFr);

    kgVeg = Number(kgVeg);
    
    kgFr = Number(kgFr);

    let sumVeg = priceKgVeg * kgVeg;

    let sumFr = priceKgFr * kgFr;

    let total = sumVeg + sumFr;

    return (total / 1.94).toFixed(2);

}

console.log(solve(['0.194', '19.4', '10', '10']));