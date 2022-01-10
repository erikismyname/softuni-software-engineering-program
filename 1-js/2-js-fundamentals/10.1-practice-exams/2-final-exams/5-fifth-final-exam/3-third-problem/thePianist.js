function solve([n, ...arr]) {

    let result = [];

    let data = {};

    let actions = {

        Add: (piece, [composer, key]) => {

            if (data[piece]) {

                result.push(`${piece} is already in the collection!`);

                return;

            }

            data[piece] = { composer, key };

            result.push(`${piece} by ${composer} in ${key} added to the collection!`);

        },

        Remove: (piece) => {

            if (!data[piece]) {

                result.push(`Invalid operation! ${piece} does not exist in the collection.`);

                return;

            }

            delete data[piece];

            result.push(`Successfully removed ${piece}!`);

        },

        ChangeKey: (piece, [newKey]) => {

            if (!data[piece]) {

                result.push(`Invalid operation! ${piece} does not exist in the collection.`);

                return;

            }

            data[piece].key = newKey;

            result.push(`Changed the key of ${piece} to ${newKey}!`);

        }

    };

    n = Number(n);

    arr.slice(0, n).forEach(el => {

        let [piece, composer, key] = el.split('|');

        data[piece] = { composer, key };

    });

    arr.slice(n, -1).forEach(el => {

        let [command, piece, ...values] = el.split('|');

        actions[command](piece, values);

    });

    Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer)).map(el => `${el[0]} -> Composer: ${el[1].composer}, Key: ${el[1].key}`).forEach(el => result.push(el));

    return result.join('\n');

}

console.log(solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]));

// console.log(solve([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]));

// console.log(solve(['1', 'Erika|Erik|G', 'Berika|Berik|G', 'Stop']));