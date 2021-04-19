function solve([num]) {

    if (Number(num) < 100) {

        return 'Less than 100';

    } else if (Number(num) >= 100 && Number(num) <= 200) {

        return 'Between 100 and 200';

    }

    return 'Greater than 200';

}