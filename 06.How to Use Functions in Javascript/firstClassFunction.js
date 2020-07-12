function add(a, b) {
    return a + b
}

var sum = add
console.log(sum(4, 9));

var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](9, 9));

var obj = {
    sum: add
}
console.log(obj);
console.log(obj.sum(10, 12));

setTimeout(function () {
    console.log('I have created...');
},1000)