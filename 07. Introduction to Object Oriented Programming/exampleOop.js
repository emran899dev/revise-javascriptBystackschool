// // procedural

// var width = 10
// var height = 20

// function calculatorArea(width, height) {
//     return width * height
    
// }
// function calculatorRange(width, height) {
//     return 2*(width + height)
    
// }
// var area = calculatorArea(width,height)
// var range = calculatorRange(width, height)
// console.log(area+range);

// Object Oriented

var reck = {
    width: 10,
    height: 20,
    calculatorArea: function () {
        return this.width * this.height
    },
    calculatorRange: function () {
        return 2* (this.width+this.height)
    }
}
var area = reck.calculatorArea()
var range = reck.calculatorRange()

console.log(area+range);