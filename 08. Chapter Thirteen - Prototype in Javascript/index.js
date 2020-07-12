// function Person(name) {
//     this.name = name
// }

// var p1 = new Person('Emran Nazir')
// console.log(p1);

// var person = {
//     name: 'Emran'
// }

// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.getPrototypeOf(person));
// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor);

// function Person(name) {
//     this.name = name
// }
// Person.prototype.PI = 3.1416

// var p1 = new Person('Nazir')

// console.log(p1);
// console.log(Object.getPrototypeOf(p1));
// console.log(Object.prototype);

// console.log(p1);

// function Square(width) {
//     this.width = width
//     this.getWidth = function () {
//         console.log('Width is ' + this.width)
//         // this.draw()
//     }
// }

// Square.prototype = {
//     draw: function () {
//         this.getWidth()
//         console.log('Draw')

//     },
//     toString: function () {
//         return 'My width is ' + this.width
//     }
// }

// var sqrt = new Square(10)
// var sqrt1 = new Square(9)

// inheritanc
function Shape(color) {
    this.color = color
}
Shape.prototype.common = function () {
        console.log('This is a common FUnction');
    }

function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}
    

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square


Square.prototype.draw = function () {
    console.log('This is Draw function');
}

// function Circle() {
    
// }
// Circle.prototype = Object.create(Shape.prototype)

// var shp = new Shape()
var sqr = new Square(10, 'green')
// var cir = new Circle()