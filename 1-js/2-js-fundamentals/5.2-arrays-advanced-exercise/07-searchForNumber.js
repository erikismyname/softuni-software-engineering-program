function solve(arr, [take, del, find]) {

    return `Number ${find} occurs ${arr.slice(0, take).slice(del).filter(el => el == find).length} times.`;

}

console.log(solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)); // Number 3 occurs 1 times.