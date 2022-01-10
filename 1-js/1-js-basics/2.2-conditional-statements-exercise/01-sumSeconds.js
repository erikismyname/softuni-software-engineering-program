function solve([secondsOne, secondsTwo, secondsThree]) {

    let total = Number(secondsOne) + Number(secondsTwo) + Number(secondsThree);

    let hours = Math.trunc(total / 60);

    let minutes = total % 60;

    return minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`;

}

console.log(solve(['35', '45', '44'])); // 2:04

console.log(solve(['22', '7', '34'])); // 1.03

console.log(solve(['50', '50', '49'])); // 2.29