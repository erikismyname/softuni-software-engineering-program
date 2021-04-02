function solve([hallPrice]) {

    let cake = Number(hallPrice) * 0.20;

    let drinks = cake * 0.55;

    let animator = Number(hallPrice) / 1/3;

    return Number(hallPrice) + cake + drinks + animator;

}