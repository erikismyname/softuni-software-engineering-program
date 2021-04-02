function solve([deposit, time, percent]) {

    let monthlyIncrease = ((Number(deposit) * Number(percent)) / 100) / 12;

    return Number(deposit) + (Number(time) * monthlyIncrease);

}