var a = 10
var b = 20
var c = 50
var d = 40

if (a > b && c > d) {
    console.log('A is greater then B and C is greater then D');
} else {
    console.log('not valid');
}

if (a > b || c > d) {
    console.log('A is greater then B or C is greater then D');
} else {
    console.log('not valid');
}

var check = !!(a > b || c > d)
console.log(check);