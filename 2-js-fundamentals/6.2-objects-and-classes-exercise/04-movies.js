function solve(arr) {

    let result = [];

    arr.forEach(el => {

        if (el.includes('addMovie')) {

            let name = el.substring(9);

            result.push({ name });

        } else if (el.includes('directedBy')) {

            let name = el.split(' directedBy ')[0];

            let movie = result.filter(el => el.name == name);

            if (movie.length) {

                let director = el.substring(el.indexOf('directedBy') + 11);

                movie[0].director = director;

            }

        } else {

            let name = el.split(' onDate ')[0];

            let movie = result.filter(el => el.name == name);

            if (movie.length) {

                let date = el.substring(el.indexOf('onDate') + 7);

                movie[0].date = date;

            }

        }

    });

    result.filter(el => el.name && el.director && el.date).forEach(el => console.log(JSON.stringify(el)));

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
/*
{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
*/