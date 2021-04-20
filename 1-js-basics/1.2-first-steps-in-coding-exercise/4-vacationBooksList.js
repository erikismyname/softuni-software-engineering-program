function solve([currentPages, pagesAnHour, daysNum]) {

    return (Number(currentPages) / Number(pagesAnHour)) / Number(daysNum);

}

console.log(solve(['212', '20', '2'])); // 5.3

console.log(solve(['432', '15', '4'])); // 7.2