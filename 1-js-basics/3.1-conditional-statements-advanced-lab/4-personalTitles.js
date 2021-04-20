function solve([age, gender]) {

    age = Number(age);

    if (gender == 'm') {

        return age < 16 ? 'Master' : 'Mr.';

    }

    return age < 16 ? 'Miss' : 'Ms.';

}

console.log(solve(['12', 'f'])); // Miss

console.log(solve(['17', 'm'])); // Mr.

console.log((solve(['25', 'f']))); // Ms.

console.log(solve(['13.5', 'm'])); // Master