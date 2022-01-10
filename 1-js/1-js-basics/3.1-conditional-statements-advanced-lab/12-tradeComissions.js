function solve([town, sales]) {

    sales = Number(sales);

    let towns = ['Sofia', 'Varna', 'Plovdiv'];

    let data = {

        firstCol: {

            Sofia: 5,

            Varna: 4.5,

            Plovdiv: 5.5

        },

        secondCol: {

            Sofia: 7,

            Varna: 7.5,

            Plovdiv: 8

        },

        thirdCol: {

            Sofia: 8,

            Varna: 10,

            Plovdiv: 12

        },

        fourthCol: {

            Sofia: 12,

            Varna: 13,

            Plovdiv: 14.5

        }

    };

    if (!towns.includes(town) || sales < 0) {

        return 'error';

    }

    let result = 0;

    if (sales >= 0 && sales <= 500) {

        result = data.firstCol[town];

    } else if (sales > 500 && sales <= 1000) {

        result = data.secondCol[town];

    } else if (sales > 1000 && sales <= 10000) {

        result = data.thirdCol[town];

    } else if (sales > 10000) {

        result = data.fourthCol[town];

    }

    return ((result * sales) / 100).toFixed(2);

}

console.log(solve(['Sofia', '1500'])); // 120

console.log(solve(['Plovdiv', '499.99'])); // 27.50

console.log(solve(['Kaspichan', '-50'])); // error