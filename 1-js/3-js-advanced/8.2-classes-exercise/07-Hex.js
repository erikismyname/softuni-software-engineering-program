class Hex {

    constructor(value) {

        this.value = value;

    }

    valueOf() {

        return this.value;

    }

    toString() {

        return '0x' + Number(this.value).toString(16).toUpperCase();

    }

    plus(obj) {

        return new Hex(this.value + obj.value);

    }

    minus(obj) {

        return new Hex(this.value - obj.value);

    }

    parse(str) {

        return parseInt(str, 16);

    }

}