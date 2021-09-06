class Circle {

    constructor(radius) {

        this.radius = radius;

    }

    set diameter(val) {

        this.radius = val / 2;

    }

    get diameter() {

        return this.radius * 2;

    }

    get area() {

        return Math.PI * (this.radius ** 2);

    }

}