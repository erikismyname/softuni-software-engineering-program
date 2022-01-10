function solve(steps, footprM, speedKm) {

    const distance = steps * footprM;

    const totalTime = (distance / (speedKm / 3.6)) + Math.floor(distance / 500) * 60;

    const hours = Math.floor(totalTime / 3600);

    const minutes = Math.floor(totalTime / 60);

    const seconds = Math.round(totalTime % 60);

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

}