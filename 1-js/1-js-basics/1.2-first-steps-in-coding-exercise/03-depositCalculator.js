function solve([deposit, time, percent]) {

    deposit = Number(deposit);
    time = Number(time);
    percent = Number(percent);

    let monthlyIncrease = ((deposit * percent) / 100) / 12;

    return deposit + (time * monthlyIncrease);

}

console.log(solve(['200', '3', '5.7'])); // 202.85

console.log(solve(['2350', '6', '7'])); // 2432.25