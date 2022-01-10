function solve([k, ...arr]) {

    return `${arr.slice(0, k).join(' ')}\n${arr.slice(-k).join(' ')}`;

}

console.log(solve([2, 7, 8, 9])); // 7 8
// 8 9