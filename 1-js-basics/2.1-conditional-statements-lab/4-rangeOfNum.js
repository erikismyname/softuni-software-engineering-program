function solve([num]) {

    num = Number(num);

    if (num < 100) {

        return 'Less than 100';

    } else if (num >= 100 && num <= 200) {

        return 'Between 100 and 200';

    }

    return 'Greater than 200';

}

console.log(solve(['95'])); //Less than 100

console.log(solve(['120'])); // Between 100 and 200

console.log(solve(['210'])); // Greater than 200