var person = [
    {
        name: 'emran',
        age: '19'
    },
    {
        name: 'emon',
        age: '18'
    },
    {
        name: 'emran',
        age: '22'
    }
]
person.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(person);