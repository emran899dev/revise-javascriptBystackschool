function sample(a, b, cb) {
    var c = a + b
    var d = a - b
    var result = cb(c, d)
    return result
}

function sum(x, z) {
    return x + z
}
var result1 = sample(5, 8, sum)
console.log(result1);

var result2 = sample(5, 8, function (x,z) {
    return x - z
})
console.log(result2);