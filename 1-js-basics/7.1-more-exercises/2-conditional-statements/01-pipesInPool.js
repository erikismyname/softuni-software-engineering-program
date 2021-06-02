function solve([vL, debitOneH, debitTwoH, h]) {

    vL = Number(vL);

    debitOneH = Number(debitOneH);

    debitTwoH = Number(debitTwoH);

    h = Number(h);

    let debitOneTotal = debitOneH * h;

    let debitTwoTotal = debitTwoH * h;

    let totalDebit = debitOneTotal + debitTwoTotal;

    return totalDebit <= vL ? `The pool is ${((totalDebit / vL) * 100).toFixed(2)}% full. Pipe 1: ${((debitOneTotal / totalDebit) * 100).toFixed(2)}%. Pipe 2: ${((debitTwoTotal / totalDebit) * 100).toFixed(2)}%.` : `For ${h.toFixed(2)} hours the pool overflows with ${(totalDebit - vL).toFixed(2)} liters.`;

}

console.log(solve(['1000', '100', '120', '3']));
console.log(solve(['100', '100', '100', '2.5']));