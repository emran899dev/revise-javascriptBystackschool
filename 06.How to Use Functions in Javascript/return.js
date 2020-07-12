function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
   return sum
}

var result = addAll(40,60)
var result1 = addAll(40, 60, 80)

console.log(result,result1);

function person(name, roll) {
    return {
        name: name,
        roll: roll
    }
}

var person1 = person('Emran', 328435)
console.log(person1);
console.log(person1.name);

function getRectArea(width, height) {
    return width * height
}
console.log(getRectArea(5,8));