function solve([campaignDays, cooks, cakesNum, wafflesNum, pancakesNum]) {

    campaignDays = Number(campaignDays);
    cooks = Number(cooks);
    cakesNum = Number(cakesNum);
    wafflesNum = Number(wafflesNum);
    pancakesNum = Number(pancakesNum);

    let totalSum = ((cakesNum * 45) + (wafflesNum * 5.80) + (pancakesNum * 3.20)) * cooks * campaignDays;

    return totalSum - (totalSum / 1 / 8);

}

console.log(solve(['23', '8', '14', '30', '16']));
// 137687.2

console.log(solve(['131', '5', '9', '33', '46']));
// 426175.75