function solve([squareM, grapesSqM, neededL, workers]) {

    squareM = Number(squareM);

    grapesSqM = Number(grapesSqM);

    neededL = Number(neededL);

    workers = Number(workers);

    let totalProduct = squareM * grapesSqM;

    let wineL = (totalProduct * 0.40) / 2.5;

    if (wineL < neededL) {

        return `It will be a tough winter! More ${Math.floor(neededL - wineL)} liters wine needed.`;

    } else {

        return `Good harvest this year! Total wine: ${Math.floor(wineL)} liters.\n${Math.ceil(wineL - neededL)} liters left -> ${Math.ceil((wineL - neededL) / workers)} liters per person.`;

    }

}

console.log(solve(['650', '2', '175', '3']));
console.log(solve(['1020', '1.5', '425', '4']));