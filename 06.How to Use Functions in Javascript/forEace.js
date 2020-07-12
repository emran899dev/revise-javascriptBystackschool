var arr = [1, 2, 3, 4, 5, 6]

 arr.forEach(function (value, index, array) {
  return  array[index] = value + 5
})
console.log(arr);


// var Esum = 0
// var Osum = 0

//  arr.forEach(function (value, index, array) {
    
//      if (value % 2 == 0) {
//          // console.log(value);
//          Esum += value
         
//      } else if (value % 2 == 1){
//         Osum += value
//      }
    
//  })
// console.log(Esum);
// console.log(Osum);
