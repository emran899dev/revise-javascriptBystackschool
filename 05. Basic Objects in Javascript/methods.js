var obj = {
    x: 10,
    y: 20,
    z: 30
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// no use

// var obj2 = obj
// obj2['x'] = 30
// console.log(obj2);

// use

// var obj2 = Object.assign({}, obj)
// obj2['x'] = 900
// console.log(obj);
// console.log(obj2);

var name = {
    name: 'Emran',
    lastName: 'Nazir'
    
}
var details = {
    clg: 'JHPI',
    roll: 328435,
    reg: 271959
    
}

var marge = Object.assign(name, details)
console.log(marge);