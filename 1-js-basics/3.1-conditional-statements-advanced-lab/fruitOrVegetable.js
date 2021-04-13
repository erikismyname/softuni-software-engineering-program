function solve([product]) {

    if (product == 'banana' || product == 'apple' || product == 'kiwi' || product == 'cherry' || product == 'lemon' || product == 'grapes') {

        return 'fruit';

    } else if (product == 'tomato' || product == 'cucumber' || product == 'pepper' || product == 'carrot') {

        return 'vegetable';

    } else {

        return 'unknown';

    }

}