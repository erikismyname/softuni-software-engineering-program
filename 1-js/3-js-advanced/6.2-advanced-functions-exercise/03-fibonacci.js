function outer() {

    let a = 0;

    let b = 1;

    return function inner() {

        const sum = a + b;

        a = b;

        b = sum;

        return a;

    }

}