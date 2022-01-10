function solve(arr) {

    let [walkMin, walksNum, calories] = arr.filter(el => el != '').map(Number);

    let total = (walkMin * walksNum) * 5;

    return total >= calories / 2 ? `Yes, the walk for your cat is enough. Burned calories per day: ${total}.` : `No, the walk for your cat is not enough. Burned calories per day: ${total}.`;

}

console.log(solve(['30', '3', '600', '']));

console.log(solve(['15', '2', '500', '']));

console.log(solve(['40', '2', '300', '']));