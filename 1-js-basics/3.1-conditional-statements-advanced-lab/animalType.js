function solve([animal]) {

    if (animal == 'dog') {

        return 'mammal';

    } else if (animal == 'crocodile' || animal == 'tortoise' || animal == 'snake') {

        return 'reptile';

    } else {

        return 'unknown';

    }

}