function solve(radius, height) {

    return `volume = ${(Math.PI * (radius ** 2) * (height / 3)).toFixed(4)}\narea = ${(Math.PI * radius * (radius + Math.sqrt((height ** 2) + (radius ** 2)))).toFixed(4)}`;

}

console.log(solve(3, 5)); // volume = 47.1239
// area = 83.2298