function solve([celsius]) {

    celsius = Number(celsius);

    return ((celsius * 1.8) + 32).toFixed(2);

}

console.log(solve(['25']));