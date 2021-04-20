function solve([time, day]) {

    time = Number(time);

    let workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return workingDays.includes(day) && time >= 10 && time <= 18 ? 'open' : 'closed';

}

console.log(solve(['11', 'Monday'])); // open

console.log(solve(['19', 'Friday'])); // closed