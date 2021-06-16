function solve(distance, passengers, priceOneL) {

    return `Needed money for that trip is ${(((distance / 100) * 7) + (passengers * 0.100)) * priceOneL}lv.`;
    
}

console.log(solve(260, 9, 2.49)); // Needed money for that trip is 47.559lv.