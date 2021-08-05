function composeAndConvert(arr) {

    const result = [];

    arr.slice(1).map(trasformLine).forEach(e => result.push({ Town: e[0], Latitude: e[1], Longitude: e[2] }));

    return JSON.stringify(result)

    function trasformLine(line) {

        return line.split('|').filter(e => e).map(e => e.trim()).map(e => isNaN(e) ? e : Number(Number(e).toFixed(2)));

    }

}