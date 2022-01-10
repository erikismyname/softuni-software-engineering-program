function solve(arr) {

    arr = arr.map(Number);

    let result = [];

    let sum = 0;

    while (arr.length) {

        while (arr.includes(30)) {

            arr.splice(arr.indexOf(30), 1);


        }

        if (arr.length) {

            result.push(195 * arr.length);

            sum += ((1900 * 195) * arr.length);

            arr = arr.map(el => el += 1);

        }

    }

    return `${result.join(', ')}\n${sum} pesos`;

}

console.log(solve([21, 25, 28])); // 585, 585, 390, 390, 390, 195, 195, 195, 195 
// 5928000 pesos