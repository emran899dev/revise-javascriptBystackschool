var n = 10
var store = ''

if (n % 2 == 0) {
   store = 'Event' 
} else {
    store = 'Odd'
}

console.log(store);

var result = n % 2 == 0 ? 'Event' : 'Odd'
console.log(result);
