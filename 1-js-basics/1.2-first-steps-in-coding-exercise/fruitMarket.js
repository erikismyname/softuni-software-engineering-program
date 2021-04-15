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