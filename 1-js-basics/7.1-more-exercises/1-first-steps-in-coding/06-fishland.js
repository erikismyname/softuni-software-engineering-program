function solve([priceSkKg, priceTsKg, palKg, safKg, midKg]) {

    priceSkKg = Number(priceSkKg);

    priceTsKg = Number(priceTsKg);

    palKg = Number(palKg);

    safKg = Number(safKg);

    midKg = Number(midKg);

    let pricePalKg = priceSkKg * 1.6;

    let priceSafKg = priceTsKg * 1.8;

    let palTotal = pricePalKg * palKg;

    let safTotal = priceSafKg * safKg;

    let midTotal = midKg * 7.5;

    return (palTotal + safTotal + midTotal).toFixed(2);

}

console.log(solve(['6.90', '4.20', '1.5', '2.5', '1']));