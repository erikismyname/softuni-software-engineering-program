function solve([num]) {

    num = Number(num);

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return num >= 1 && num <= 7 ? days[num - 1] : 'Error';

}