function solve([days, foodLeft, dogFoodKg, catFoodKg, tortFoodG]) {

    days = Number(days);

    foodLeft = Number(foodLeft);

    dogFoodKg = Number(dogFoodKg);

    catFoodKg = Number(catFoodKg);

    tortFoodG = Number(tortFoodG);

    let tortFoodKg = tortFoodG / 1000;

    let totalNeeded = (dogFoodKg * days) + (catFoodKg * days) + (tortFoodKg * days);

    return totalNeeded <= foodLeft ? `${Math.floor((foodLeft - totalNeeded))} kilos of food left.` : `${Math.ceil(totalNeeded - foodLeft)} more kilos of food are needed.`;

}

console.log(solve(['2', '10', '1', '1', '1200']));
console.log(solve(['5', '10', '2.1', '0.8', '321']));