function solve([product, town, quantity]) {

    quantity = Number(quantity);

    let data = {

        Sofia: {

            'coffee': 0.50,
    
            'water': 0.80,
    
            'beer': 1.20,
    
            'sweets': 1.45,
    
            'peanuts': 1.60
    
        },

        Plovdiv: {

            'coffee': 0.40,
    
            'water': 0.70,
    
            'beer': 1.15,
    
            'sweets': 1.30,
    
            'peanuts': 1.50
    
        },

        Varna: {

            'coffee': 0.45,
    
            'water': 0.70,
    
            'beer': 1.10,
    
            'sweets': 1.35,
    
            'peanuts': 1.55
    
        }

    };

    return (data[town][product] * quantity).toFixed(2);

}

console.log(solve(['coffee', 'Varna', '2'])); // 0.9

console.log(solve(['peanuts', 'Plovdiv', '1'])); // 1.5

console.log(solve(['beer', 'Sofia', '6'])); // 7.2