function solve(arr) {

    let result = [];

    class Cat {

        constructor(name, age) {

            this.name = name;

            this.age = age;

        }

        meow() {

            return `${this.name}, age ${this.age} says Meow`;

        }

    }

    arr.forEach(el => {

        let [name, age] = el.split(' ');

        result.push(new Cat(name, age).meow());

    });

    return result.join('\n');

}

console.log(solve(['Mellow 2', 'Tom 5'])); // Mellow, age 2 says Meow
// Tom, age 5 says Meow