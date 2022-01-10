function solve(arr) {

    const citiesData = {};

    const result = [];

    arr.forEach(e => {

        const [townName, townPop] = e.split(' <-> ').map(e => isNaN(e) ? e : Number(e));

        !citiesData[townName] ? citiesData[townName] = townPop : citiesData[townName] += townPop;

    });

    Object.entries(citiesData).map(([n, p]) => `${n} : ${p}`).forEach(e => result.push(e));

    return result.join('\n');

}