function solve(num, precision) {

    if (precision > 15) {

        precision = 15;

    }

    return parseFloat(num.toFixed(precision));

}

console.log(solve(3.1415926535897932384626433832795,2)); // 3.14