function solve(...strings) {

    const totalLength = strings.reduce((acc, c) => acc + c.length, 0);

    const avgLength = Math.floor(totalLength / strings.length);

    return `${totalLength}\n${avgLength}`;

}