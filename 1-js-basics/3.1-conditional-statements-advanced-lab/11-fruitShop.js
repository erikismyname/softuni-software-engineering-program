function solve([fruit, day, quantity]) {

    quantity = Number(quantity);

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let workingDays = {

        banana: 2.50,

        apple: 1.20,

        orange: 0.85,

        grapefruit: 1.45,

        kiwi: 2.70,

        pineapple: 5.50,

        grapes: 3.85

    };

    let weekendDays = {

        banana: 2.70,

        apple: 1.25,

        orange: 0.90,

        grapefruit: 1.60,

        kiwi: 3.00,

        pineapple: 5.60,

        grapes: 4.20

    };

    if (!days.includes(day) || !workingDays[fruit]) {

        return 'error';

    }

    let result = day == 'Saturday' || day == 'Sunday' ? weekendDays[fruit] * quantity : workingDays[fruit] * quantity;

    return result.toFixed(2);

}

console.log(solve(['apple', 'Tuesday', '2'])); // 2.40

console.log(solve(['orange', 'Sunday', '3'])); // 2.70

console.log(solve(['tomato', 'Monday', '0.5'])); // error