function solve([strawberriesPrice, bananasKg, orangesKg, raspberriesKg, strawberriesKg]) {

    strawberriesPrice = Number(strawberriesPrice);
    bananasKg = Number(bananasKg);
    orangesKg = Number(orangesKg);
    raspberriesKg = Number(raspberriesKg);
    strawberriesKg = Number(strawberriesKg);

    let raspberriesPrice = strawberriesPrice / 2;

    let orangesPrice = raspberriesPrice * 0.60;

    let bananasPrice = raspberriesPrice * 0.20;

    return (strawberriesPrice * strawberriesKg) + (raspberriesPrice * raspberriesKg) + (orangesPrice * orangesKg) + (bananasPrice * bananasKg);

}

console.log(solve(['48', '10', '3.3', '6.5', '1.7']));
// 333.12

console.log(solve(['63.5', '3.57', '6.35', '8.15', '2.5']));
// 561.1495