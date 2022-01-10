function solve(arr) {

    arr = arr.filter(el => el != '').map(el => isNaN(el) ? el : Number(el));

    let bestPlayer = '';

    let goals = 0;

    for (let a = 0; a < arr.length; a += 2) {

        if (arr[a] == 'END') {

            break;

        }

        if (arr[a + 1] > goals) {

            bestPlayer = arr[a];

            goals = arr[a + 1];

            if (goals > 10) {

                break;

            }

        }

    }

    return `${bestPlayer} is the best player!\n${goals < 3 ? `He has scored ${goals} goals.` : `He has scored ${goals} goals and made a hat-trick !!!`}`;

}

console.log(solve([
    'Neymar', '2',
    'Ronaldo', '1',
    'Messi', '3',
    'END', ''
]));

console.log(solve(['Silva', '5', 'Harry Kane', '10', '']));

console.log(solve(['Rooney', '1', 'Junior', '2', 'Paolinio', '2', 'END', '']));

console.log(solve(['Petrov', '2', 'Drogba', '11', '']));

console.log(solve([
    'Zidane', '1',
    'Felipe', '2',
    'Johnson', '4',
    'END', ''
]));