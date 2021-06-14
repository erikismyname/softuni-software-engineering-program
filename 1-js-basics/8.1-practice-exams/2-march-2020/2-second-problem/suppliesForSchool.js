function solve(arr) {

    let [pensNum, markersNum, lt, discountP] = arr.filter(el => el != '').map(Number);

    return (((pensNum * 5.80) + (markersNum * 7.20) + (lt * 1.20)) * (1 - (discountP / 100))).toFixed(3);

}

console.log(solve(['2', '3', '2.5', '25']));

console.log(solve(['4', '2', '5', '13', '']));

console.log(solve(['7', '8', '0.5', '45', '']));