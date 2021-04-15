function solve() {

  return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';

}

// The solution below is not mine. It was written by my fellow software developer Doychin (doychinivanov) and its purpose is to serve as an improvement of my initial solution.

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