// class Movie{
// constructor (tittle1,studio1,rating1='pg'){
// this.tittle = tittle1;
// this.studio = studio1;
// this.rating = rating1;
// }


// }

// let movies = Array(new Movie('casino Royale','Eon productions','PG13'), new Movie('sand Royale','sun productions',), new Movie('rock Royale','vin productions','PG13'), new Movie('soil Royale','won productions',));

// function getPG(movies){
//     let newMoview = [];

// for ( let index in movies) {
//   //  console.log(movie);
//     if(movies[index].rating == "PG13"){
//         newMoview.push(movies[index]);
//      }
// }
//     return newMoview;
// }


// console.log(getPG(movies));




// URl diagram


class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Usage
let circle1 = new Circle();
console.log(circle1.toString());

let circle2 = new Circle(2.5);
console.log(circle2.toString());

let circle3 = new Circle(3.0, "blue");
console.log(circle3.toString());

circle3.setRadius(4.0);
circle3.setColor("green");
console.log(circle3.toString());

console.log(`Area: ${circle3.getArea()}`);
console.log(`Circumference: ${circle3.getCircumference()}`);
