function solve([recordInSec, distanceInM, timeForOneM]) {

    recordInSec = Number(recordInSec);

    distanceInM = Number(distanceInM);

    timeForOneM = Number(timeForOneM);

    let total = (distanceInM * timeForOneM) + (Math.floor(distanceInM / 15) * 12.5);

    return total < recordInSec ? `Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.` : `No, he failed! He was ${(total - recordInSec).toFixed(2)} seconds slower.`;

}