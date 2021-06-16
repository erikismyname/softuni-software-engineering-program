function solve(band, album, song) {

    return `The plate was rotated ${Math.ceil(((band.length * album.length * song.length) / 2) / 2.5)} times.`;

}

console.log(solve('Black Sabbath', 'Paranoid', 'War Pigs'));
// The plate was rotated 167 times.