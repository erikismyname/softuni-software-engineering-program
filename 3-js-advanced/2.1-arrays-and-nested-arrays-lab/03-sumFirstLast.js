const result = (arr) => arr.map(Number).filter((e, i, arr) => i == 0 || i == arr.length - 1).reduce((acc, c) => acc + c, 0);