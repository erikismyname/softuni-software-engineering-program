function solve(obj) {

    let result = [];

    Object.entries(obj).forEach(el => {

        result.push(`${el[0]} -> ${el[1]}`);

    });

    return result.join('\n');

}

console.log(solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
));
/*
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000
*/