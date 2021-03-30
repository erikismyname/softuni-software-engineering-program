function solve([num, from, to]) {

    num = Number(num);

    let data = {

        'mToCm': (num * 100).toFixed(3),

        'mToMm': (num * 1000).toFixed(3),

        'cmToM': (num / 100).toFixed(3),

        'cmToMm': (num * 10).toFixed(3),

        'mmToCm': (num / 10).toFixed(3),

        'mmToM': (num / 1000).toFixed(3)

    }

    if (from == 'm' && to == 'cm') {

        return data['mToCm'];

    } else if (from == 'm' && to == 'mm') {

        return data['mToMm'];

    } else if (from == 'cm' && to == 'm') {

        return data['cmToM'];

    } else if (from == 'cm' && to == 'mm') {

        return data['cmToMm'];

    } else if (from == 'mm' && to == 'cm') {

        return data['mmToCm'];

    }

    return data['mmToM'];

}