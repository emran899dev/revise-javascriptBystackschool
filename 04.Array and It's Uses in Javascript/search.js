var arr = [8, 2, 9, 4, 3, 5, 1, 7, 10, 16]

var search = 11
var isFound = false

for (var i = 0; i < arr.length; i++){
    if (arr[i] == search) {
        console.log('Data is Find ' + i);
        isFound = true
        break
    } 
}

if (!isFound) {
    console.log('Data is Not Found');
}