function getNumbersInRange(n, m){
    const result = [];
    return setNumbers(n, m)
    .join('\n');

    function setNumbers(n, m) {
        if (n <= m) {
          result.push(n);
          n++;
          setNumbers(n, m);
        }

        return result;
    }

}

console.log(getNumbersInRange(1, 10));

// Will print a diffrent range of numbers
// console.log(getNumbersInRange(1, 15));
// console.log(getNumbersInRange(1, 20));
