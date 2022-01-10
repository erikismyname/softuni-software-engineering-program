function createObject(width, height, color) {

    color = color[0].toUpperCase() + color.slice(1);

    return {

        width,

        height,

        color,

        calcArea() {

            return this.width * this.height;

        }

    };

}

const rectangle = createObject(4, 5, 'red');

console.log(rectangle);

console.log(rectangle.width);

console.log(rectangle.height);

console.log(rectangle.color);

console.log(rectangle.calcArea());