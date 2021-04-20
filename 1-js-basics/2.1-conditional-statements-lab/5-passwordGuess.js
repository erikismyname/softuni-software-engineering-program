function solve([pass]) {

    return pass == 's3cr3t!P@ssw0rd' ? 'Welcome' : 'Wrong password!';

}

console.log(solve(['qwerty'])); // Wrong password!

console.log(solve(['s3cr3t!P@ssw0rd'])); // Welcome