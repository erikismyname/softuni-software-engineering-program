function solve(arr) {

    arr.forEach(el => {

        let [name, lat, lon] = el.split(' | ');

        console.log({

            town: name,

            latitude: Number(lat).toFixed(2),

            longitude: Number(lon).toFixed(2)

        });

    });

}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
); // { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }