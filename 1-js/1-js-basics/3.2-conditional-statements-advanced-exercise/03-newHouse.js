function solve([type, num, budget]) {

    num = Number(num);

    budget = Number(budget);

    let data = {

        'Roses': 5,

        'Dahlias': 3.80,

        'Tulips': 2.80,

        'Narcissus': 3,

        'Gladiolus': 2.50

    }

    let total = num * data[type];

    if (type == 'Roses' && num > 80) {

        total *= 0.90;

    } else if ((type == 'Dahlias' && num > 90) || (type == 'Tulips' && num > 80)) {

        total *= 0.85;

    } else if (type == 'Narcissus' && num < 120) {

        total *= 1.15;

    } else if (type == 'Gladiolus' && num < 80) {

        total *= 1.20;

    }

    return total <= budget ? `Hey, you have a great garden with ${num} ${type} and ${(budget - total).toFixed(2)} leva left.` : `Not enough money, you need ${(total - budget).toFixed(2)} leva more.`;
       
}

console.log(solve(['Narcissus', '119', '360']));