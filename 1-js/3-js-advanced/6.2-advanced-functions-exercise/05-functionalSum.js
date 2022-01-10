function outer(num) {

    let sum = num;

    inner.toString = () => sum;

    return inner;

    function inner(num) {

        sum += num;

        return inner;

    }

}

console.log(outer(1).toString());
console.log(outer(1)(6)(-3).toString());