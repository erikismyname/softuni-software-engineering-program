function solve(arr) {

    let data = {};

    arr.forEach(el => {

        let [direction, num] = el.split(', ');

        direction == 'IN' ? data[num] = direction : delete data[num]

    });

    return Object.entries(data).length ? Object.entries(data).sort((a, b) => a[0].localeCompare(b[0])).map(el => el[0]).join('\n') : 'Parking Lot is Empty';

}

console.log(solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
));
/*
CA2822UU
CA2844AA
CA9876HH
CA9999TT
*/