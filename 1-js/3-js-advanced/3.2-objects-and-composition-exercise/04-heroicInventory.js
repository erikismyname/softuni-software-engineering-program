function createHeroRegister(arr) {

    const result = [];

    arr.forEach(e => {

        let [name, level, items] = e.split(' / ').map(v => isNaN(v) ? v : Number(v));

        result.push(!items ? { name, level, items: [] } : { name, level, items: items.split(', ') });

    });

    return JSON.stringify(result);

}