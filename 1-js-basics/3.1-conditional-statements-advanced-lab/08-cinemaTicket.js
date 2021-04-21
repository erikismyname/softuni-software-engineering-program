function solve([day]) {

    let priceData = {

        'Monday': 12,

        'Tuesday': 12,

        'Wednesday' : 14,

        'Thursday': 14,

        'Friday': 12,

        'Saturday': 16,

        'Sunday': 16

    };

    return priceData[day];

}

console.log(solve(['Monday'])); // 12

console.log(solve(['Friday'])); // 12

console.log(solve(['Sunday'])); // 16