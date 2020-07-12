var arr = [1, 2, 3, 4, 5, 6,22]

var max = arr.reduce(function (pre, curr) {
    return Math.max(pre,curr)
})
console.log(max);