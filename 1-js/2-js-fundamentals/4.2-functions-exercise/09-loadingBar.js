function solve(num) {

    let pattern = `[${'%'.repeat(num / 10) + '.'.repeat(10 - (num / 10))}]`;

    return num == 100 ? `100% Complete!\n${pattern}` : `${num}% ${pattern}\nStill loading...`

}

console.log(solve(30)); // 30% [%%%.......]
// Still loading...

console.log(solve(100)); // 100% Complete!
// [%%%%%%%%%%]