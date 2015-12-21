const cloneDate = require("../lib");

var d = new Date(1989, 11, 21);

// Clone the d object
var c = cloneDate(d);

console.log(d);
// => Thu Dec 21 1989 00:00:00 GMT+0200 (EET)

console.log(c);
// => Thu Dec 21 1989 00:00:00 GMT+0200 (EET)

console.log(c === d);
// => false
