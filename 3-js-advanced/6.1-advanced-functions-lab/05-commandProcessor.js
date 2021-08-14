function returnObject() {

    let str = '';

    return {

        append: (val) => str += val,

        removeStart: (num) => str = str.slice(num),

        removeEnd: (num) => str = str.slice(0, -num),

        print() { console.log(str) },

    };

}