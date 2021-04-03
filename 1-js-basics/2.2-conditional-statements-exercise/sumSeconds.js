function solve([secondsOne, secondsTwo, secondsThree]) {

    let total = Number(secondsOne) + Number(secondsTwo) + Number(secondsThree);

    let hours = Math.trunc(total / 60);

    let minutes = total % 60;

    return minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`;

}