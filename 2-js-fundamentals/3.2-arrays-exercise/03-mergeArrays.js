function solve(arrOne, arrTwo) {

    let result = [];

    arrOne.forEach((el, i) => {

        i % 2 == 0 ? result.push(Number(el) + Number(arrTwo[i])) : result.push(el + arrTwo[i]);

    });

    return result.join(' - ');

}

console.log(solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])); // 22-1522-110-5636-46