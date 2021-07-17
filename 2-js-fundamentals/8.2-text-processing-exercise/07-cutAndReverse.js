function solve(str) {

    return `${[...str].filter((el, i, arr) => i < Math.ceil(arr.length / 2)).reverse().join('')}\n${[...str].filter((el, i, arr) => i >= Math.ceil(arr.length / 2)).reverse().join('')}`;

}

console.log(solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI'));