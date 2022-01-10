function solve(product, num) {

    let data = {

        coffee: 1.5,

        water: 1,

        coke: 1.4,

        snacks: 2

    };

    return (data[product] * num).toFixed(2);

}

console.log(solve('water', 5)); // 5.00