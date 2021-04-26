function solve(name) {

    if (name == 'England' || name == 'USA') {

        return 'English';

    } else if (name == 'Spain' || name == 'Argentina' || name == 'Mexico') {

        return 'Spanish';

    }

    return 'unknown';

}

console.log(solve('USA')); // English

console.log(solve('Germany')); // unknown