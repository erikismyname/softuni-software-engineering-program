function solve([age, gender]) {

    age = Number(age);

    if (gender == 'm') {

        return age < 16 ? 'Master' : 'Mr.';

    }

    return age < 16 ? 'Miss' : 'Ms.';

}