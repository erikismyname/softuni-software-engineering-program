function solve(str) {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return days.includes(str) ? days.indexOf(str) + 1 : 'error';

}