var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
// var eq = user1 == user2;
var eq = JSON.stringify(user1) === JSON.stringify(user2) 
console.log(eq);