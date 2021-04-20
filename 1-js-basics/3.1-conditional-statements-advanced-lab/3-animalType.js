function solve([animal]) {

    if (animal == 'dog') {

        return 'mammal';

    } else if (animal == 'crocodile' || animal == 'tortoise' || animal == 'snake') {

        return 'reptile';

    }

    return 'unknown';

}

console.log(solve(['dog'])); // mammal

console.log(solve(['snake'])); // reptile

console.log(solve(['cat'])); // unknown