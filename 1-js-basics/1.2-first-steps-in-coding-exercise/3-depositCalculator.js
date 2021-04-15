function solve([deposit, time, percent]) {

    deposit = Number(deposit);

    time = Number(time);

    percent = Number(percent);

    let monthlyIncrease = ((deposit * percent) / 100) / 12;

    return deposit + (time * monthlyIncrease);

}