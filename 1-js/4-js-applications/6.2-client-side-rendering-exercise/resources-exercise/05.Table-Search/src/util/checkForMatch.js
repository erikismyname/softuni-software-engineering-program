export function checkForMatch(data, value) {

    return Object.values(data)
        .slice(0, 4)
        .some(e => value && e.toLowerCase().includes(value.toLowerCase()));

}