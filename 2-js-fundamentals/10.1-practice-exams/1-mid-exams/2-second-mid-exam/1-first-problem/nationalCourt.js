function solve(arr) {

    let hours = 0;

    let totalEff = arr.slice(0, 3).map(Number).reduce((acc, c) => acc + c);

    let people = Number(arr.pop());

    while (people > 0) {

        hours++;

        if (hours % 4 != 0) {

            people -= totalEff;

        }

    }

    return `Time needed: ${hours}h.`;

}

console.log(solve(['1', '2', '3', '45']));