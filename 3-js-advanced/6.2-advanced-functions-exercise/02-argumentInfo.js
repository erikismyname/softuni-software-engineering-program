function getArgumentInfo(...arr) {

    const counterHolder = {};

    arr.forEach(e => {

        console.log(`${typeof e}: ${e}`);

        !counterHolder[typeof e] ? counterHolder[typeof e] = 1 : counterHolder[typeof e]++;

    });

    Object.entries(counterHolder).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`${k} = ${v}`));

}