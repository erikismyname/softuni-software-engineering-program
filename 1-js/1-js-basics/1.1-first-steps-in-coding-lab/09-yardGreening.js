function solve([squareM]) {

    let totalSum = Number(squareM) * 7.61;

    return `The final price is: ${(totalSum * 0.82).toFixed(2)} lv.\nThe discount is: ${totalSum * 0.18} lv.`;

}

console.log(solve(['550']));
// The final price is: 3432.11 lv.
//The discount is: 753.39 lv.

console.log(solve(['150']));
// The final price is: 936.03 lv.
// The discount is: 205.47 lv.