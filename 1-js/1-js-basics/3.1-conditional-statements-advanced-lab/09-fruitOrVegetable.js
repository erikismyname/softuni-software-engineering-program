function solve([product]) {

    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];

    let vegetables = ['tomato', 'cucumber', 'pepper', 'carrot'];

    if (fruits.includes(product)) {

        return 'fruit';

    } else if (vegetables.includes(product)) {

        return 'vegetable';

    }

    return 'unknown';

}

console.log(solve(['banana'])); // fruit

console.log(solve(['apple'])); // fruit

console.log(solve(['tomato'])); // vegetable

console.log(solve(['water'])); // unknown