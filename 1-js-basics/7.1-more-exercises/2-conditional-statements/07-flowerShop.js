function solve([magn, zum, roses, cactuses, presentPrice]) {

    magn = Number(magn);

    zum = Number(zum);

    roses = Number(roses);

    cactuses = Number(cactuses);

    presentPrice = Number(presentPrice);

    let total = ((magn * 3.25) + (zum * 4) + (roses * 3.50) + (cactuses * 8)) * 0.95;
    
    return total < presentPrice ? `She will have to borrow ${Math.ceil(presentPrice - total)} leva.` : `She is left with ${Math.floor(total - presentPrice)} leva.`;

}

console.log(solve(['2', '3', '5', '1', '50']));
console.log(solve(['15', '7', '5', '10', '100']));