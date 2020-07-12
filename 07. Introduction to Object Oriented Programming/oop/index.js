// var rect = {
//     width: 100,
//     height: 500,
//     print: function () {
//         console.log('I am a rectangle')
//         this.printProperties()
//     },
//     printProperties: function () {
//         console.log('My Width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// rect.print()
// rect.height = 100
// rect.print()

// function test() {
//     console.log(this);
//     rect.printProperties()
// }
// test()

// var another = {
//     width: 400,
//     height: 300,
//     printAnother: rect.printProperties
// }
// console.log(another);
// another.printAnother()

// // fectory pattern

// var createRect = function (width, height) {
//     return {
//         width: width,
//         height: height,
//         print: function () {
//             console.log('I am a rectangle')
//             this.printProperties()
//         },
//         printProperties: function () {
//             console.log('My Width is ' + this.width)
//             console.log('My height is ' + this.height)
//         }
//     }
// }

// var rect = createRect(10, 30)
// rect.print()

// // Constructor pattern

// var CreateRect = function (width, height) {
//     this.width = width
//     this.height = height
    
//     this.print = function () {
//         console.log('I am a rectangle')
//             this.printProperties()
//     }

//     this.printProperties = function () {
//         console.log('My Width is ' + this.width)
//             console.log('My height is ' + this.height)
//     }
// }

// var rect = new CreateRect(40, 50)
// rect.print()


// // call , bind , apply

// function myFun(c,d) {
//     console.log(this);
//     console.log(this.a + this.b + c + d);
// }

// myFun.call({ a: 40, b: 30 }, 70, 70)
// myFun.apply({ a: 40, b: 30 }, [70, 70])

// var test = myFun.bind({ a: 7, b: 3 }, 3, 7)
// test()
// var testBind = myFun.bind({ a: 7, b: 3 })
// testBind(13, 7)


// // pass by value Vs pass by reference
// // call by value Vs call by reference

// var n = 10

// function change(n) {
//     n = n + 40
//     console.log(n);
// }
// change(n)
// console.log(n);


// var obj = {
//     a: 20,
//     b: 30
// }

// function changeMe(obj) {
//     obj.a = obj.a + 30
//     obj.b = obj.b + 20
//     console.log(obj);
// }
// // console.log(obj);
// changeMe(obj)
// console.log(obj);

// // Abstraction pattran
// var CreateRect = function (width, height) {

//     var position = {
//         a: 10,
//         b: 20
//     }

//     this.width = width
//     this.height = height

//    var printProperties = function () {
//         console.log('My Width is ' + this.width)
//             console.log('My height is ' + this.height)
//     }.bind(this)

//     this.print = function () {
//         console.log('I am a rectangle')
//         printProperties()
//         console.log('Position: A = ' + position.a + ', Position: B = ' + position.b);
//     }
// }

// var rect = new CreateRect(20, 30)
// rect.print()

// var CreateRect = function (width, height) {

//     var position = {
//         a: 10,
//         b: 20
//     }

//     this.width = width
//     this.height = height

//    var printProperties = function () {
//         console.log('My Width is ' + this.width)
//             console.log('My height is ' + this.height)
//     }.bind(this)

//     this.getPosition = function () {
//         return position
//     }

//     this.print = function () {
//         console.log('I am a rectangle')
//         printProperties()
//         console.log('Position: A = ' + position.a + ', Position: B = ' + position.b);
//     }
// }
// var rect = new CreateRect(20, 30)
// rect.print()
// console.log(rect.getPosition());

// // PRTC

// function Person(name) {
//     var obj = {
//         roll: 328435,
//         reg: 221959,
//         print1: function () {
//             console.log(this.reg);
//         }
//     }
//     this.name = name
//     this.print = function () {
//         console.log(name);
//         console.log(obj.roll);
//        obj.print1()
//     }
// }
// var a = new Person('emran')
// a.print()

// Start Inheritance Prototype

// function Person(name) {
//     this.name = name
// }

// var I = new Person('Nazir')
// console.log(I);


// var obj = {
//     name: 'emran nazir'
// }
// console.log(obj);

// for (var i in obj) {
//     console.log(i);
// }
// console.log(Object.keys(obj));

// var descriptor = Object.getOwnPropertyDescriptor(obj, 'name')
// console.log(descriptor);

// var baseObj = Object.getPrototypeOf(obj)
// var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor);

// Object.defineProperties(obj, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: 'ENE'
    
// })

// // Construtor Protoype Object

// function Person(name) {
//     this.name = name
// }

// Person.prototype.PI = 3.1416
// var I = new Person('Nazir')
// console.log(I);

//  Instance vs Prototype Members

function Person(name) {
    this.name = name
    this.getFun = function () {
        console.log('I am getFun');
    }
}

Person.prototype = {
    print: function () {
        console.log('My name is ' + this.name);
        this.getFun()
    },
    toString: function () {
        return 'my name is = ' + this.name
    }
}
var I = new Person('Nazir')
console.log(I);

console.log(I.hasOwnProperty('getFun'));
console.log(Object.keys(I));
for (var i in I) {
    console.log(i);
}


