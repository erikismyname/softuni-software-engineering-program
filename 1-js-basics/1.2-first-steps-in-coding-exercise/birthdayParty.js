function solve([hallPrice]) {

    hallPrice = Number(hallPrice);

    let cake = hallPrice * 0.20;

    let drinks = cake * 0.55;

    let animator = hallPrice / 1 / 3;

    return hallPrice + cake + drinks + animator;

}