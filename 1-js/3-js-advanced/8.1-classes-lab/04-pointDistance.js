class Point {

    constructor(x, y) {

        this.x = x;

        this.y = y;

    }

    static distance(pointA, pointB) {

        const a = pointA.x - pointB.x;

        const b = pointA.y - pointB.y;

        return Math.sqrt((a ** 2) + (b ** 2));

    }

}