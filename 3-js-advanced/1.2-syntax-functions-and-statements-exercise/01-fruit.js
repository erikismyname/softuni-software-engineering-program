function solve(fruit, weightGr, priceKg) {

    const weightKg = weightGr / 1000;

    return `I need $${(weightKg * priceKg).toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;

}