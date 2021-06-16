function solve(num) {

    let days = Math.trunc((num * 100) * 365.2422);

    return `${num} centuries = ${num * 100} years = ${days} days = ${days * 24} hours = ${(days * 24) * 60} minutes`

}

console.log(solve(1)); // 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes