function solve(...nums) {

    return nums.sort((a, b) => b - a).join('\n');

}

console.log(solve(2, 1, 3)); // 3
// 2
// 1