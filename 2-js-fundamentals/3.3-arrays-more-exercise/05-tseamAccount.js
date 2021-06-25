function solve(arr) {

    let games = arr.shift().split(' ');

    for (let line of arr) {

        if (line == 'Play!') {

            break;

        }

        executeCommand(line.split(' '));

    }

    return games.join(' ');

    function executeCommand([action, name]) {

        if (action == 'Install' && !games.includes(name)) {

            games.push(name);

        } else if (action == 'Uninstall' && games.includes(name)) {

            games.splice(games.indexOf(name), 1);

        } else if (action == 'Update' && games.includes(name)) {

            games.splice(games.indexOf(name), 1);

            games.push(name);

        } else if (action == 'Expansion' && games.includes(name.split('-')[0])) {

            let [game, type] = name.split('-');

            games.splice(games.indexOf(game) + 1, 0, `${game}:${type}`);

        }

    }

}

console.log(solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
)); // CS CS:Go LoL Diablo