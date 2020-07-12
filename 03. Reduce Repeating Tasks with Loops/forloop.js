// for (i = 0; i < 100; i++ ){
//  console.log((i + 1) + ' Javascript forLooop');   
// }

// for (i = 1; i <= 100; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// var sum = 0

// for (var i = 1; i <= 10; i++){
//     console.log(sum + '+' + i + '=' + (sum+i));
//     var result =  sum += i
// }
// console.log('result ' + result);

var sum = 0

for (var i = 1; i <= 10; i++){
    if (i % 2 == 0) {
        console.log(sum + '+' + i + '=' + (sum+i));
        var result =  sum += i
    }
}
console.log('result ' + result);