function solve(str) {

    return `File name: ${str.slice(str.lastIndexOf('\\') + 1, str.lastIndexOf('.'))}\nFile extension: ${str.slice(str.lastIndexOf('.') + 1)}`;

}

console.log(solve('C:\\Internal\\training-internal\\Template.pptx'));