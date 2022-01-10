function solve(arr) {

    return arr.sort().map((el, i) => `${i + 1}.${el}`).join('\n');

}

console.log(solve(["Potatoes", "Tomatoes", "Onions", "Apples"])); // 1. Apples
// 2. Onions
// 3. Potatoes
// 4. Tomatoes  