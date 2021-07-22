function solve(arr) {

    let totalEff = arr.slice(0, -1).map(Number).reduce((acc, c) => acc + c);

    let people = Number(arr.pop());

    let hours = 0;

    while (people > 0) {

        hours++;

        if (hours % 4 == 0) {

            continue;

        }

        people -= totalEff;

    }

    return `Time needed: ${hours}h.`;

}

console.log(solve(['5', '6', '4', '20']));

console.log(solve(['1', '2', '3', '45']));

console.log(solve(['3', '2', '5', '40']));