function solve(str, char, temp) {

    return str.replace('_', char) == temp ? 'Matched' : 'Not Matched';

}

console.log(solve('Str_ng', 'I', 'Strong')); // Not Matched

console.log(solve('Str_ng', 'i', 'String')); // Matched