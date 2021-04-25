function solve(num) {

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return num >= 1 && num <= 12 ? months[num - 1] : 'Error!';

}

console.log(solve(2)); // February

console.log(solve(13)); // Error!