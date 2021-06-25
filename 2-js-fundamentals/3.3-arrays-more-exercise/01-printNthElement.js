function solve(arr) {

    let step = Number(arr.pop());

    return arr.filter((el, i) => i % step == 0).join(' ');

}

console.log(solve(['5', '20', '31', '4', '20', '2'])); // 5 31 20