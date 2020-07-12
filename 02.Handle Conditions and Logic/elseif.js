var a = 30
var b = 30

if (a > b) {
    console.log('A is greater then B');
} else if (a < b) {
    console.log('B is greater then A');
} else if (a == b) {
    console.log(' A and B Value is same');
}

var n = 0

if (n == 0) {
    console.log(n + ' is zero');
} else if (n % 2 == 0) {
    console.log(n + ' is Event Number');
} else {
    console.log(n + ' is Odd Number');
}

// exampul

var date = new Date()
var today = date.getDay()
var todayDate = date.getDate()

if (today == 0) {
    console.log('Today is Sunday Date ' + todayDate);
} else if (today == 1) {
    console.log('Today is Monday Date ' + todayDate)
} else if (today == 2) {
    console.log('Today is Tuesday Date ' + todayDate)
} else if (today == 3) {
    console.log('Today is Wednesday Date ' + todayDate)
} else if (today == 4) {
    console.log('Today is Thursday Date ' + todayDate)
} else if (today == 5) {
    console.log('Today is Firday Date ' + todayDate)
} else if (today == 6) {
    console.log('Today is Saturday Date ' + todayDate)
} else {
    console.log('no day');
}