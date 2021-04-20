function solve([day]) {

    let workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    let weekendDays = ['Saturday', 'Sunday'];

    if (workingDays.includes(day)) {

        return 'Working day';

    } else if (weekendDays.includes(day)) {

        return 'Weekend';

    }

    return 'Error';

}

console.log(solve(['Monday'])); // Working day

console.log(solve(['Sunday'])); // Weekend

console.log(solve(['April'])); // Error