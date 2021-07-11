function solve([words, ...arr]) {

    let data = {};
    
    words.split(' ').map(el => data[el] = 0);

    arr.forEach(el => {

        if (words.split(' ').includes(el)) {

            data[el]++;

        }

    });

    return Object.entries(data).sort((a, b) => b[1] - a[1]).map(el => `${el[0]} - ${el[1]}`).join('\n');

}

console.log(solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
));
/*
this - 3
sentence - 2
*/