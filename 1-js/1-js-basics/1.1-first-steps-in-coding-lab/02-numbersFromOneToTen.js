function solve() {

  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join('\n');

}

console.log(solve());
// 1
// ...
// 10

// The solution below is not mine. It was written by my fellow software developer Doychin (github -> doychinivanov) and its purpose is to serve as an improvement of my initial solution as Doychin's code is more abstract.

function getNumbersInRange(n, m) {

  const result = [];

  return setNumbers(n, m).join('\n');

  function setNumbers(n, m) {

    if (n <= m) {

      result.push(n);

      n++;

      setNumbers(n, m);

    }

    return result;

  }

}

console.log(getNumbersInRange(1, 10)); // Same result as above.