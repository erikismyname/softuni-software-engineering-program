function solve(arr) {

    let neededBook = arr.shift();

    let index = 0;

    let current = arr[index];

    let isFound = false;

    let counter = 0;

    while (true) {

        if (current == 'No More Books') {

            break;

        } else if (current == neededBook) {

            isFound = true;

            break;

        } else {

            index++;

            current = arr[index];

            counter++;

        }

    }

    return isFound == true ? `You checked ${counter} books and found it.` : `The book you search is not here!\nYou checked ${counter} books.`;

}

console.log(solve([
    'Bourne',     'True Story',
    'Forever',    'More Space',
    'The Girl',   'Spaceship',
    'Strongest',  'Profit',
    'Tripple',    'Stella',
    'The Matrix', 'Bourne'
  ]));