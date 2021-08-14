function processList(arr) {

    let result = [];

    const methods = {

        add: (str) => result.push(str),

        remove: (str) => result = result.filter(e => e != str),

        print: () => console.log(result.join(',')),

    };

    arr.forEach(e => {

        const [command, value] = e.split(' ');

        methods[command](value);

    });

}