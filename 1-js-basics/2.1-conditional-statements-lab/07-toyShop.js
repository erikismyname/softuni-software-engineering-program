function solve([tripPrice, puzzlesNum, dollsNum, bearsNum, minionsNum, trucksNum]) {

    tripPrice = Number(tripPrice);
    puzzlesNum = Number(puzzlesNum);
    dollsNum = Number(dollsNum);
    bearsNum = Number(bearsNum);
    minionsNum = Number(minionsNum);
    trucksNum = Number(trucksNum);

    let totalPrice = (puzzlesNum * 2.60) + (dollsNum * 3) + (bearsNum * 4.10) + (minionsNum * 8.20) + (trucksNum * 2);

    let finalMoney = 0;

    puzzlesNum + dollsNum + bearsNum + minionsNum + trucksNum >= 50 ? finalMoney = (totalPrice * 0.75) * 0.90 : finalMoney = totalPrice * 0.90;

    return finalMoney >= tripPrice ? `Yes! ${(finalMoney - tripPrice).toFixed(2)} lv left.` : `Not enough money! ${(tripPrice - finalMoney).toFixed(2)} lv needed.`;

}

console.log(solve(['40.8', '20', '25', '30', '50', '10']));
// Yes! 418.20 lv left.

console.log(solve(['320', '8', '2', '5', '5', '1']));
//Not enough money! 238.73 lv needed.