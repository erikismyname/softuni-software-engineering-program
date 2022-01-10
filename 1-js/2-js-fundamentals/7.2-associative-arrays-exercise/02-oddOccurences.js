function solve(str) {

    let data = new Map();

    str.split(' ').forEach(el => {

        el = el.toLowerCase();

        if (!data.has(el)) {

            data.set(el, 0);

        }

        data.set(el, data.get(el) + 1);

    });

    return [...data.entries()].filter(el => el[1] % 2 != 0).map(el => el[0]).join(' ');

}

console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
// c# php 1 5