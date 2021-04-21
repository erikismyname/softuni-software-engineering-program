function solve([recordInSec, distanceInM, timeForOneM]) {

    recordInSec = Number(recordInSec);
    distanceInM = Number(distanceInM);
    timeForOneM = Number(timeForOneM);

    let total = (distanceInM * timeForOneM) + (Math.floor(distanceInM / 15) * 12.5);

    return total < recordInSec ? `Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.` : `No, he failed! He was ${(total - recordInSec).toFixed(2)} seconds slower.`;

}

console.log(solve(['10464', '1500', '20']));
// No, he failed! He was 20786.00 seconds slower.

console.log(solve(['55555.67', '3017', '5.03']));
// Yes, he succeeded! The new world record is 17688.01 seconds.