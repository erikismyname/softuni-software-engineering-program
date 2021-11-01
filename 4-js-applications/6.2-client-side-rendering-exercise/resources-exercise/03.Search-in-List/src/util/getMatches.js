export function getMatches(towns, value) {

    const matchesCount = towns.filter(t => t.toLowerCase().includes(value.toLowerCase())).length;

    return matchesCount == 1 ? '1 match found!' : `${matchesCount} matches found!`;

}