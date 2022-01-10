function solve(arr) {

    let num = Number(arr.shift());

    let sum = 0;

    let counter = 0;

    for (let a = 0; a < arr.length; a++) {

        sum += Number(arr[a]);

        counter++;
        
    }

    return (sum / counter).toFixed(2);

}

console.log(solve(['4', '3', '2', '4', '2']));
console.log(solve(['2', '6', '4']));
console.log(solve(['4', '95', '23', '76', '23']));