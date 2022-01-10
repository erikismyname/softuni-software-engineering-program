function solve([hriz, roses, tulips, season, typeOfDay]) {

    hriz = Number(hriz);

    roses = Number(roses);

    tulips = Number(tulips);

    let sum = 0;

    if (season == 'Spring' || season == 'Summer') {

        sum += (hriz * 2) + (roses * 4.10) + (tulips * 2.50);

    } else {

        sum += (hriz * 3.75) + (roses * 4.50) + (tulips * 4.15);

    }

    if (typeOfDay == 'Y') {

        sum *= 1.15;

    }

    if (tulips > 7 && season == 'Spring') {

        sum *= 0.95;

    }

    if (roses >= 10 && season == 'Winter') {

        sum *= 0.90;

    }

    if (hriz + roses + tulips > 20) {

        sum *= 0.80;
        
    }

    return (sum + 2).toFixed(2);

}

console.log(solve(['2', '4', '8', 'Spring', 'Y']));
console.log(solve(['3', '10', '9', 'Winter', 'N']));
console.log(solve(['10', '10', '10', 'Autumn', 'N']));