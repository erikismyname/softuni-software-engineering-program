function solve([names, ...arr]) {

    let result = [];

    let pattern = /[\w]/g;

    arr.forEach(el => {

        let name = '';

        let sum = 0;

        let match = el.match(pattern);

        match.forEach(m => {

            isNaN(m) ? name += m : sum += Number(m);

        });

        let found = result.find(el => el.name == name);

        if (names.includes(name)) {

            found ? found.sum += sum : result.push({ name, sum });

        }

    });

    let data = {

        1: '1st',

        2: '2nd',

        3: '3rd'

    };

    return result.sort((a, b) => b.sum - a.sum).slice(0, 3).map((el, i) => `${data[i + 1]} place: ${el.name}`).join('\n');

}

console.log(solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]));