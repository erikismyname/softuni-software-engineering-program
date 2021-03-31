function solve([num, from, to]) {

    num = Number(num);

    let data = {

        'mTocm': (num * 100),

        'mTomm': (num * 1000),

        'cmTom': (num / 100),

        'cmTomm': (num * 10),

        'mmTocm': (num / 10),

        'mmTom': (num / 1000)

    }

    return data[`${from}To${to}`].toFixed(3);

}
