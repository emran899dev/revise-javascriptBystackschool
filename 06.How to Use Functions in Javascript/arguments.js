// function add(a, b) {
//     var result = a + b
//     console.log(result);
// }

// add(20,10)

// var arr1 = [1, 4, 2, 5, 6, 7]
// var arr2 = [1, 4, 2, 8, 6, 3]
// var arr3 = [1, 4, 7, 5, 6, 9]

// var sum = 0
// for (var i = 0; i < arr1.length; i++){
//     sum += arr1[i]
// }
// console.log(sum);

// // use function

// function sum(arr) {
//     var add = 0
//     for (var i = 0; i < arr.length; i++){
//         add += arr[i]
//     }
//     console.log(add);
// }

// sum(arr1)
// sum(arr2)
// sum(arr3)


function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum);
}
addAll(40,50,60)
addAll(40,50,60,80)