var arr = [1, 2, 3, 4, 5, 6,22]

var search = arr.find(function (value) {
 return value == 4   
})
console.log(search);

var search = arr.findIndex(function (value) {
    return value == 4   
   })
   console.log(search);