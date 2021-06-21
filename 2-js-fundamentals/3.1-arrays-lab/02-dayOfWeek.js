function solve(num) {

    return num >= 1 && num <= 7 ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][num - 1] : 'Invalid day!';

}

console.log(solve(3)); // Wednesday

console.log(solve(11)); // Invalid day!