function composeClasses() {

    class Figure {

        constructor(units = 'cm') {

            this.units = units;

        }

        convertUnits(value) {

            const actions = {

                m: (val) => val / 10,

                cm: (val) => val,

                mm: (val) => val * 10,

            };

            return actions[this.units](value);

        }

        changeUnits(value) {

            this.units = value;

        }

        toString() {

            return `Figures units: ${this.units}`;

        }

    }

    class Circle extends Figure {

        constructor(radius, units) {

            super(units);

            this._radius = radius;

        }

        get radius() {

            return this.convertUnits(this._radius);

        }

        get area() {

            return Math.PI * (this.radius ** 2);

        }

        toString() {

            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;

        }

    }

    class Rectangle extends Figure {

        constructor(width, height, units) {

            super(units);

            this._width = width;

            this._height = height;

        }

        get width() {

            return this.convertUnits(this._width);

        }

        get height() {

            return this.convertUnits(this._height);

        }

        get area() {

            return this.width * this.height;

        }

        toString() {

            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;

        }

    }

    return { Figure, Circle, Rectangle };

}