function solve(year, month, day) {

    let date = new Date(year, month - 1, day + 1);

    let newYear = date.getFullYear();

    let newMonth = date.getMonth() + 1;

    let newDay = date.getDate();

    return `${newYear}-${newMonth}-${newDay}`;

}

console.log(solve(2016, 9, 30));