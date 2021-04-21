function solve([num]) {

    num = Number(num);

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return num >= 1 && num <= 7 ? days[num - 1] : 'Error';

}

console.log(solve(['1'])); // Monday

console.log(solve(['2'])); // Tuesday

console.log(solve(['3'])); // Wednesday

console.log(solve(['4'])); // Thursday

console.log(solve(['5'])); // Friday

console.log(solve(['6'])); // Saturday

console.log(solve(['7'])); // Sunday

console.log(solve(['8'])); // Error