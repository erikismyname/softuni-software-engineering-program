function solve([freeDays]) {

    freeDays = Number(freeDays);

    let workingDays = 365 - freeDays;

    let total = (freeDays * 127) + (workingDays * 63);

    if (total <= 30000) {

        total = 30000 - total;
        
        let h = Math.trunc(total / 60);

        let m = total % 60;

        return `Tom sleeps well\n${h} hours and ${m} minutes less for play`;

    } else {

        total -= 30000;

        let h = Math.trunc(total / 60);

        let m = total % 60;

        return `Tom will run away\n${h} hours and ${m} minutes more for play`;

    }

}

console.log(solve(['20']));
console.log(solve(['113']));