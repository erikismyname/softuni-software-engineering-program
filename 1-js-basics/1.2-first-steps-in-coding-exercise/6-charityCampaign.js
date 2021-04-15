function solve([campaignDays, cooks, cakesNum, wafflesNum, pancakesNum]) {

    campaignDays = Number(campaignDays);

    cooks = Number(cooks);

    cakesNum = Number(cakesNum);

    wafflesNum = Number(wafflesNum);

    pancakesNum = Number(pancakesNum);

    let totalSum = ((cakesNum * 45) + (wafflesNum * 5.80) + (pancakesNum * 3.20)) * cooks * campaignDays;

    return totalSum - (totalSum / 1 / 8);

}