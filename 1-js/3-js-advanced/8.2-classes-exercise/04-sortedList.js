class List {

    constructor() {

        this.list = [];

        this.size = 0;

    }

    add(element) {

        this.list.push(element);

        this.list.sort((a, b) => a - b);

        this.size++;

    }

    remove(index) {

        if (this.checkRange(index)) {

            this.list.splice(index, 1);

            this.size--;

        }

    }

    get(index) {

        if (this.checkRange(index)) {

            return this.list[index];

        }

    }

    checkRange(index) {

        return index >= 0 && index < this.list.length;

    }

}