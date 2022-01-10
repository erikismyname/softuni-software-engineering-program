function solve([n, ...arr]) {

    let result = [];

    let type = arr.pop();

    class Song {

        constructor(list, name, time) {

            this.list = list;

            this.name = name;

            this.time = time;

        }

    }

    arr.forEach(el => {

        let [list, name, time] = el.split('_');

        result.push(new Song(list, name, time));

    });

    if (type != 'all') {

        result = result.filter(el => el.list == type);

    }

    return result.map(el => el.name).join('\n');

}

console.log(solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)); // DownTown
// Kiss
// Smooth Criminal